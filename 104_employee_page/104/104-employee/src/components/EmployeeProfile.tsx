import React, { useState, useEffect } from 'react';
import { Employee } from '../types/employee';
import { employeeApi } from '../api/employeeApi';
import { Edit3, Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, Camera } from 'lucide-react';
import EditModal from './EditModal';
import EducationEditModal from './EducationEditModal';
import ExperienceEditModal from './ExperienceEditModal';
import AvatarEditModal from './AvatarEditModal';

interface EmployeeProfileProps {
  employeeId: string;
}

const EmployeeProfile: React.FC<EmployeeProfileProps> = ({ employeeId }) => {
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editSection, setEditSection] = useState<string>('');
  const [educationModalOpen, setEducationModalOpen] = useState(false);
  const [experienceModalOpen, setExperienceModalOpen] = useState(false);
  const [avatarModalOpen, setAvatarModalOpen] = useState(false);

  useEffect(() => {
    loadEmployee();
  }, [employeeId]);

  const loadEmployee = async () => {
    try {
      setLoading(true);
      const data = await employeeApi.getEmployee(employeeId);
      setEmployee(data);
    } catch (error) {
      console.error('Failed to load employee:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (data: any) => {
    if (!employee) return;
    
    try {
      const updated = await employeeApi.updateEmployee(employee.id, data);
      setEmployee(updated);
    } catch (error) {
      console.error('Failed to update employee:', error);
    }
  };

  const handleUpdateEducation = async (education: any[]) => {
    await handleUpdate({ education });
  };

  const handleUpdateExperience = async (experience: any[]) => {
    await handleUpdate({ experience });
  };

  const handleUpdateAvatar = async (avatarUrl: string) => {
    await handleUpdate({ avatar: avatarUrl });
  };

  const openEditModal = (section: string) => {
    setEditSection(section);
    setEditModalOpen(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!employee) {
    return <div className="text-center p-8">员工信息加载失败</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* 头部信息 */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center">
              <div className="relative group">
                <img
                  src={employee.avatar || 'https://via.placeholder.com/150'}
                  alt={`${employee.firstName} ${employee.lastName}`}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <button
                  onClick={() => setAvatarModalOpen(true)}
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 rounded-full transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100"
                >
                  <Camera className="w-6 h-6 text-white" />
                </button>
              </div>
              <div className="ml-6">
                <h1 className="text-3xl font-bold text-gray-900">
                  {employee.firstName} {employee.lastName}
                </h1>
                <p className="text-xl text-gray-600">{employee.position}</p>
                <p className="text-gray-500">{employee.department} • {employee.location}</p>
              </div>
            </div>
            <button
              onClick={() => openEditModal('basic')}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Edit3 className="w-5 h-5" />
            </button>
          </div>
          
          {employee.bio && (
            <div className="mt-4">
              <p className="text-gray-700">{employee.bio}</p>
            </div>
          )}

          <div className="mt-4 flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-1" />
              {employee.email}
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              {employee.phone}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              入职时间: {new Date(employee.joinDate).toLocaleDateString('zh-CN')}
            </div>
          </div>
        </div>

        {/* 技能标签 */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">技能</h2>
            <button
              onClick={() => openEditModal('skills')}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Edit3 className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {employee.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 工作经验 */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">工作经验</h2>
            <button
              onClick={() => setExperienceModalOpen(true)}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Edit3 className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            {employee.experience.map((exp) => (
              <div key={exp.id} className="border-l-2 border-gray-200 pl-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(exp.startDate).toLocaleDateString('zh-CN')} - 
                      {exp.current ? '至今' : new Date(exp.endDate!).toLocaleDateString('zh-CN')}
                    </p>
                    {exp.description && (
                      <p className="mt-2 text-gray-700">{exp.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 教育背景 */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">教育背景</h2>
            <button
              onClick={() => setEducationModalOpen(true)}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Edit3 className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            {employee.education.map((edu) => (
              <div key={edu.id} className="border-l-2 border-gray-200 pl-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{edu.degree} • {edu.field}</h3>
                    <p className="text-gray-600">{edu.school}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(edu.startDate).toLocaleDateString('zh-CN')} - 
                      {new Date(edu.endDate).toLocaleDateString('zh-CN')}
                    </p>
                    {edu.description && (
                      <p className="mt-2 text-gray-700">{edu.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 基本信息编辑模态框 */}
      {editModalOpen && (
        <EditModal
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          employee={employee}
          section={editSection}
          onSave={handleUpdate}
        />
      )}

      {/* 教育背景编辑模态框 */}
      {educationModalOpen && (
        <EducationEditModal
          isOpen={educationModalOpen}
          onClose={() => setEducationModalOpen(false)}
          education={employee.education}
          onSave={handleUpdateEducation}
        />
      )}

      {/* 工作经验编辑模态框 */}
      {experienceModalOpen && (
        <ExperienceEditModal
          isOpen={experienceModalOpen}
          onClose={() => setExperienceModalOpen(false)}
          experience={employee.experience}
          onSave={handleUpdateExperience}
        />
      )}

      {/* 头像编辑模态框 */}
      {avatarModalOpen && (
        <AvatarEditModal
          isOpen={avatarModalOpen}
          onClose={() => setAvatarModalOpen(false)}
          currentAvatar={employee.avatar}
          onSave={handleUpdateAvatar}
        />
      )}
    </div>
  );
};

export default EmployeeProfile;