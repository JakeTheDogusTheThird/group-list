import { ServiceItem } from './serviceItem';

interface Group {
  name: string;
  warning?: string;
  users: string[];
  services: ServiceItem[];
}

export { Group };
