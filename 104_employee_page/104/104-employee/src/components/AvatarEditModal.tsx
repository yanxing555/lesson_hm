import React, { useState, useRef } from 'react';
import { X, Upload, Camera } from 'lucide-react';

interface AvatarEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentAvatar?: string;
  onSave: (avatarUrl: string) => void;
}

const AvatarEditModal: React.FC<AvatarEditModalProps> = ({
  isOpen,
  onClose,
  currentAvatar,
  onSave
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string>(currentAvatar || '');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setSelectedImage(result);
        setPreviewImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (selectedImage || previewImage) {
      onSave(selectedImage || previewImage);
      onClose();
      setSelectedImage(null);
    }
  };

  const handleRemove = () => {
    setSelectedImage(null);
    setPreviewImage('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">更改头像</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* 预览区域 */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={previewImage || 'https://via.placeholder.com/150'}
                alt="头像预览"
                className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
              />
              {previewImage && (
                <button
                  onClick={handleRemove}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* 上传按钮 */}
          <div className="space-y-4">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="hidden"
            />
            
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Upload className="w-4 h-4 mr-2" />
              选择图片
            </button>

            <div className="text-sm text-gray-500 text-center">
              支持 JPG、PNG、GIF 格式，建议尺寸 200x200 像素以上
            </div>
          </div>

          {/* 预设头像选项 */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">预设头像</h3>
            <div className="grid grid-cols-6 gap-2">
              {[
                'https://via.placeholder.com/150/3B82F6/FFFFFF?text=A',
                'https://via.placeholder.com/150/EF4444/FFFFFF?text=B',
                'https://via.placeholder.com/150/10B981/FFFFFF?text=C',
                'https://via.placeholder.com/150/F59E0B/FFFFFF?text=D',
                'https://via.placeholder.com/150/8B5CF6/FFFFFF?text=E',
                'https://via.placeholder.com/150/EC4899/FFFFFF?text=F'
              ].map((avatar, index) => (
                <button
                  key={index}
                  onClick={() => setPreviewImage(avatar)}
                  className="w-12 h-12 rounded-full overflow-hidden border-2 hover:border-blue-500 transition-colors"
                >
                  <img
                    src={avatar}
                    alt={`预设头像 ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* 操作按钮 */}
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              取消
            </button>
            <button
              onClick={handleSave}
              disabled={!selectedImage && previewImage === currentAvatar}
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              保存更改
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarEditModal;