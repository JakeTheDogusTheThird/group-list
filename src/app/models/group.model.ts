import { ServiceItem } from './service-item.model';
import { User } from './user.model';

interface Group {
  id: number;
  name: string;
  warning?: string;
  min: string;
  max: string;
  users: User[];
  services: ServiceItem[];
}

export { Group };