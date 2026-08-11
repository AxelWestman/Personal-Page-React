import { SiStrapi } from 'react-icons/si';

const techIcons = {
  html: 'devicon-html5-plain colored',
  css: 'devicon-css3-plain colored',
  javascript: 'devicon-javascript-plain colored',
  typescript: 'devicon-typescript-plain colored',
  react: 'devicon-react-original',
  angular: 'devicon-angular-plain colored',
  tailwind: 'devicon-tailwindcss-original',
  nodejs: 'devicon-nodejs-plain colored',
  express: 'devicon-express-original',
  mysql: 'devicon-mysql-original',
  git: 'devicon-git-plain colored',
  figma: 'devicon-figma-plain colored',
  bootstrap: 'devicon-bootstrap-plain colored',
  postgres: 'devicon-postgresql-plain colored',
  next: 'devicon-nextjs-plain colored',
  nest: 'devicon-nestjs-original',
  strapi: SiStrapi,
  docker: 'devicon-docker-plain colored',
};

export function renderTechIcon(icon, className = '') {
  if (typeof icon === 'string') {
    return <i className={`${icon} ${className}`} />;
  }
  const Icon = icon;
  return <Icon className={className} />;
}

export default techIcons;
