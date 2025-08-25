import { Employee, UpdateEmployeeData } from '../types/employee';

// API接口定义，便于未来扩展和后端集成
export interface EmployeeApi {
  // 获取员工信息
  getEmployee(id: string): Promise<Employee>;
  
  // 更新员工信息
  updateEmployee(id: string, data: UpdateEmployeeData): Promise<Employee>;
  
  // 上传头像
  uploadAvatar(employeeId: string, file: File): Promise<string>;
  
  // 添加技能
  addSkill(employeeId: string, skill: string): Promise<string[]>;
  
  // 删除技能
  removeSkill(employeeId: string, skill: string): Promise<string[]>;
  
  // 添加工作经验
  addExperience(employeeId: string, experience: any): Promise<any[]>;
  
  // 更新工作经验
  updateExperience(employeeId: string, experienceId: string, experience: any): Promise<any[]>;
  
  // 删除工作经验
  deleteExperience(employeeId: string, experienceId: string): Promise<any[]>;
  
  // 添加教育背景
  addEducation(employeeId: string, education: any): Promise<any[]>;
  
  // 更新教育背景
  updateEducation(employeeId: string, educationId: string, education: any): Promise<any[]>;
  
  // 删除教育背景
  deleteEducation(employeeId: string, educationId: string): Promise<any[]>;
}

// 模拟API实现（用于演示和开发）
export class MockEmployeeApi implements EmployeeApi {
  private mockEmployee: Employee = {
    id: '1',
    firstName: '张',
    lastName: '三',
    email: 'zhang.san@company.com',
    phone: '+86 138-0000-0000',
    position: '高级前端工程师',
    department: '技术部',
    location: '上海',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    bio: '热爱技术的前端开发者，专注于React和TypeScript。拥有5年以上的前端开发经验，擅长构建高性能、可扩展的Web应用。',
    skills: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'GraphQL', 'Docker'],
    experience: [
      {
        id: '1',
        company: '科技有限公司',
        position: '高级前端工程师',
        startDate: '2021-03-01',
        current: true,
        description: '负责公司核心产品的前端架构设计和开发，带领团队完成多个重要项目。'
      },
      {
        id: '2',
        company: '互联网公司',
        position: '前端工程师',
        startDate: '2019-06-01',
        endDate: '2021-02-28',
        description: '参与电商平台的前端开发，负责商品详情页和购物车模块。'
      }
    ],
    education: [
      {
        id: '1',
        school: '上海交通大学',
        degree: '学士',
        field: '计算机科学与技术',
        startDate: '2015-09-01',
        endDate: '2019-06-30',
        description: '主修课程：数据结构与算法、软件工程、数据库原理'
      }
    ],
    joinDate: '2019-06-15',
    isActive: true
  };

  async getEmployee(id: string): Promise<Employee> {
    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 500));
    return { ...this.mockEmployee };
  }

  async updateEmployee(id: string, data: UpdateEmployeeData): Promise<Employee> {
    await new Promise(resolve => setTimeout(resolve, 800));
    this.mockEmployee = { ...this.mockEmployee, ...data };
    return { ...this.mockEmployee };
  }

  async uploadAvatar(employeeId: string, file: File): Promise<string> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return URL.createObjectURL(file);
  }

  async addSkill(employeeId: string, skill: string): Promise<string[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    if (!this.mockEmployee.skills.includes(skill)) {
      this.mockEmployee.skills = [...this.mockEmployee.skills, skill];
    }
    return [...this.mockEmployee.skills];
  }

  async removeSkill(employeeId: string, skill: string): Promise<string[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    this.mockEmployee.skills = this.mockEmployee.skills.filter(s => s !== skill);
    return [...this.mockEmployee.skills];
  }

  async addExperience(employeeId: string, experience: any): Promise<any[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const newExperience = { ...experience, id: Date.now().toString() };
    this.mockEmployee.experience = [...this.mockEmployee.experience, newExperience];
    return [...this.mockEmployee.experience];
  }

  async updateExperience(employeeId: string, experienceId: string, experience: any): Promise<any[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    this.mockEmployee.experience = this.mockEmployee.experience.map(exp =>
      exp.id === experienceId ? { ...exp, ...experience } : exp
    );
    return [...this.mockEmployee.experience];
  }

  async deleteExperience(employeeId: string, experienceId: string): Promise<any[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    this.mockEmployee.experience = this.mockEmployee.experience.filter(exp => exp.id !== experienceId);
    return [...this.mockEmployee.experience];
  }

  async addEducation(employeeId: string, education: any): Promise<any[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const newEducation = { ...education, id: Date.now().toString() };
    this.mockEmployee.education = [...this.mockEmployee.education, newEducation];
    return [...this.mockEmployee.education];
  }

  async updateEducation(employeeId: string, educationId: string, education: any): Promise<any[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    this.mockEmployee.education = this.mockEmployee.education.map(edu =>
      edu.id === educationId ? { ...edu, ...education } : edu
    );
    return [...this.mockEmployee.education];
  }

  async deleteEducation(employeeId: string, educationId: string): Promise<any[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    this.mockEmployee.education = this.mockEmployee.education.filter(edu => edu.id !== educationId);
    return [...this.mockEmployee.education];
  }
}

// 创建API实例
export const employeeApi = new MockEmployeeApi();