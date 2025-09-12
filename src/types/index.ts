export interface User {
  id: string;
  name: string;
  email: string;
  role: 'resident' | 'collector' | 'authority';
  avatar?: string;
}

export interface WasteData {
  id: string;
  date: string;
  organic: number;
  recyclable: number;
  hazardous: number;
  general: number;
  compliance: number;
}

export interface CollectionRecord {
  id: string;
  address: string;
  date: string;
  wasteType: string;
  weight: number;
  segregationAccuracy: number;
  status: 'completed' | 'pending' | 'improper';
}

export interface ComplianceData {
  household: string;
  compliance: number;
  month: string;
  wasteGenerated: number;
  rewardPoints: number;
}

export interface Alert {
  id: string;
  type: 'warning' | 'error' | 'success' | 'info';
  message: string;
  timestamp: string;
  location?: string;
}
