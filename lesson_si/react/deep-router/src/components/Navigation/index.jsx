import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/about">关于我</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;