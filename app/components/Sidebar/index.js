/**
 *
 * Sidebar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Link, NavLink } from 'react-router-dom';

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';

import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaTwitter,
  FaTelegramPlane,
  FaCrown,
  FaLink,
  FaExpandArrowsAlt,
  FaCoins,
  FaAngleDoubleRight,
} from 'react-icons/fa';

import { ImShrink } from 'react-icons/im';

import sidebarBg from '../../images/bg1.jpg';
import logo from '../../images/logo.png';

function Sidebar({
  image,
  collapsed,
  rtl,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange,
}) {
  return (
    <ProSidebar
      image={image ? sidebarBg : false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      // breakPoint="xs"
      onToggle={handleToggleSidebar}
      className={collapsed ? '' : 'sidebarExpand'}
      onMouseEnter={() => handleCollapsedChange()}
      onMouseLeave={() => handleCollapsedChange()}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '10px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '0.1ch',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
          className="logo"
        >
          <span className="logo-text">Shippuden</span>
          <FaAngleDoubleRight className="expandIcon" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            // suffix={<span className="badge red">STATS</span>}
          >
            <NavLink to="/">Overview</NavLink>
          </MenuItem>

          <MenuItem icon={<FaCrown />}>
            {' '}
            <NavLink to="/random">Random</NavLink>
          </MenuItem>

          <MenuItem icon={<FaGem />}>
            {' '}
            <NavLink to="/animated-cards">Cards Gem</NavLink>
          </MenuItem>

          <MenuItem icon={<FaList />}>
            {' '}
            <NavLink to="/animated-card-group">Card Group</NavLink>
          </MenuItem>

          <MenuItem icon={<FaCoins />}>
            {' '}
            <NavLink to="/tokenomics">Tokenomics</NavLink>
          </MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter style={{ textAlign: 'center' }}>
        {/* <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href=""
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane />
            <span> {'Telegram'}</span>
          </a>
        </div> */}

        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="#"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            {!collapsed && <img src={logo} style={{ maxWidth: '30px' }} />}
            {collapsed && <FaLink />}
            <span> {'Shippuden'}</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
