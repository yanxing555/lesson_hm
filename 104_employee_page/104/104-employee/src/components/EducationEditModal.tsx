import React, { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import { Education } from '../types/employee';

interface EducationEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  education: Education[];
  onSave: (education: Education[]) => void;
}

const EducationEditModal: React.FC<EducationEditModalProps> = ({
  isOpen,
  onClose,
  education,
  onSave
}) => {
  const [educationList, setEducationList] = useState<Education[]>(education);
  const [loading, setLoading] = useState(false);

  const handleAddEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      school: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    setEducationList([...educationList, newEducation]);
  };

  const handleUpdateEducation = (id: string, field: keyof Education, value: string) => {
    setEducationList(educationList.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  const handleDeleteEducation = (id: string) => {
    setEducationList(educationList.filter(edu => edu.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await onSave(educationList);
      onClose();
    } catch (error) {
      console.error('Failed to save education:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">编辑教育背景</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {educationList.map((edu, index) => (
              <div key={edu.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-900">教育经历 {index + 1}</h3>
                  <button
                    type="button"
                    onClick={() => handleDeleteEducation(edu.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">学校名称</label>
                    <input
                      type="text"
                      value={edu.school}
                      onChange={(e) => handleUpdateEducation(edu.id, 'school', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">学位</label>
                    <select
                      value={edu.degree}
                      onChange={(e) => handleUpdateEducation(edu.id, 'degree', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">选择学位</option>
                      <option value="学士">学士</option>
                      <option value="硕士">硕士</option>
                      <option value="博士">博士</option>
                      <option value="专科">专科</option>
                      <option value="高中">高中</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">专业</label>
                    <input
                      type="text"
                      value={edu.field}
                      onChange={(e) => handleUpdateEducation(edu.id, 'field', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">开始时间</label>
                    <input
                      type="month"
                      value={edu.startDate}
                      onChange={(e) => handleUpdateEducation(edu.id, 'startDate', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">结束时间</label>
                    <input
                      type="month"
                      value={edu.endDate}
                      onChange={(e) => handleUpdateEducation(edu.id, 'endDate', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">描述</label>
                  <textarea
                    value={edu.description || ''}
                    onChange={(e) => handleUpdateEducation(edu.id, 'description', e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="例如：主修课程、获得奖项等"
                  />
                </div>
              </div>
            ))}

            {educationList.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                暂无教育背景信息
              </div>
            )}

            <button
              type="button"
              onClick={handleAddEducation}
              className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors flex items-center justify-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              添加教育经历
            </button>
          </div>

          <div className="mt-6 flex space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              取消
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? '保存中...' : '保存'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EducationEditModal;