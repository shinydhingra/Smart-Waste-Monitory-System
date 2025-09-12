export const mockUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@resident.com',
    role: 'resident' as const,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '2',
    name: 'Mike Wilson',
    email: 'mike@collector.com',
    role: 'collector' as const,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    email: 'sarah@authority.com',
    role: 'authority' as const,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

export const mockWasteData = [
  { month: 'Jan', organic: 45, recyclable: 25, hazardous: 5, general: 25, compliance: 85 },
  { month: 'Feb', organic: 50, recyclable: 30, hazardous: 3, general: 17, compliance: 88 },
  { month: 'Mar', organic: 48, recyclable: 28, hazardous: 4, general: 20, compliance: 90 },
  { month: 'Apr', organic: 52, recyclable: 32, hazardous: 2, general: 14, compliance: 92 },
  { month: 'May', organic: 55, recyclable: 35, hazardous: 2, general: 8, compliance: 95 },
  { month: 'Jun', organic: 53, recyclable: 33, hazardous: 3, general: 11, compliance: 93 }
];

export const mockCollectionRecords = [
  {
    id: '1',
    address: '123 Green Street',
    date: '2024-01-15',
    wasteType: 'Mixed',
    weight: 12.5,
    segregationAccuracy: 85,
    status: 'completed' as const
  },
  {
    id: '2',
    address: '456 Eco Avenue',
    date: '2024-01-15',
    wasteType: 'Organic',
    weight: 8.2,
    segregationAccuracy: 95,
    status: 'completed' as const
  },
  {
    id: '3',
    address: '789 Recycle Road',
    date: '2024-01-15',
    wasteType: 'Mixed',
    weight: 15.3,
    segregationAccuracy: 65,
    status: 'improper' as const
  }
];

export const mockComplianceData = [
  { household: 'House A', compliance: 95, month: 'Dec', wasteGenerated: 45, rewardPoints: 150 },
  { household: 'House B', compliance: 87, month: 'Dec', wasteGenerated: 52, rewardPoints: 120 },
  { household: 'House C', compliance: 92, month: 'Dec', wasteGenerated: 38, rewardPoints: 140 },
  { household: 'House D', compliance: 78, month: 'Dec', wasteGenerated: 63, rewardPoints: 95 },
  { household: 'House E', compliance: 88, month: 'Dec', wasteGenerated: 41, rewardPoints: 125 }
];

export const mockAlerts = [
  {
    id: '1',
    type: 'warning' as const,
    message: 'Improper segregation detected at Green Street',
    timestamp: '2024-01-15T10:30:00Z',
    location: '123 Green Street'
  },
  {
    id: '2',
    type: 'success' as const,
    message: 'Collection completed successfully',
    timestamp: '2024-01-15T09:15:00Z',
    location: '456 Eco Avenue'
  },
  {
    id: '3',
    type: 'info' as const,
    message: 'New reward points added to your account',
    timestamp: '2024-01-15T08:45:00Z'
  }
];
