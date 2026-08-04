import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: 'System Architecture',
    title: 'Custom Web Apps',
    subtitle: 'Scalable & performant',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: 'Automation',
    title: 'Internal Tools & CRM',
    subtitle: 'Business process optimization',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: 'Headless Commerce',
    title: 'E-Commerce Systems',
    subtitle: 'High conversion platforms',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: 'Integration',
    title: 'API & Databases',
    subtitle: 'Seamless data flow',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: 'Let\'s Build',
    subtitle: '↓ Contact Me',
    url: 'mailto:sreenathyadavk@gmail.com',
    position: 'right',
  }
]