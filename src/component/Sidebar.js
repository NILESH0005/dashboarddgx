import React, { useState } from 'react';
import { PiStudentDuotone, PiStudentBold  } from "react-icons/pi";
import { IoLibraryOutline, IoLibrary } from "react-icons/io5";
import { MdInventory2, MdInventory } from "react-icons/md";
import { RiMoneyRupeeCircleFill,  RiMoneyRupeeCircleLine  } from "react-icons/ri";
import { BsBank2, BsBank } from "react-icons/bs";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { HiOutlineMoon, HiSun } from "react-icons/hi";
// import { IoMdSunny, IoMdMoon } from "react-icons/io"; // Alternate icons for theme
import { StudentModal } from './modals/StudentModal'; // Import Student Modal
import { useTheme } from '../ThemeContext'; // Import ThemeContext
import './Sidebar.css';

export const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [modalContent, setModalContent] = useState(""); // Track which modal to show
    const { theme, toggleTheme } = useTheme(); // Access theme and toggle function

    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // Function to open a specific modal
    const openModal = (modalType) => {
        setModalContent(modalType); // Set the modal type
    };

    // Function to close the modal
    const closeModal = () => {
        setModalContent(""); // Reset modal content
    };

    return (
        <div>
            {/* Sidebar */}
            <div className={`sidebar-container ${theme} ${sidebarOpen ? 'expanded' : ''}`}>
                {/* Sidebar Toggle Button */}
                <button
                    className="btn btn-primary sidebar-toggle-btn"
                    onClick={handleSidebarToggle}
                    aria-label="Toggle Sidebar"
                >
                    <FaArrowUpRightFromSquare className="fs-2" />
                </button>

                {/* Sidebar Links */}
                <div className="sidebar-links mt-5">
                    {/* Student Icon */}
                    <a
                        className="sidebar-link"
                        title="Student"
                        onClick={() => openModal('Student')}
                    >
                        {theme === 'light' ? <PiStudentDuotone className="fs-3" /> : <PiStudentBold  className="fs-3" />}
                        {sidebarOpen && <span className="sidebar-text">Student</span>}
                    </a>

                    {/* Library Icon */}
                    <a
                        className="sidebar-link"
                        title="Library"
                        onClick={() => openModal('Library')}
                    >
                        {theme === 'light' ? <IoLibraryOutline className="fs-3" /> : <IoLibrary className="fs-3" />}
                        {sidebarOpen && <span className="sidebar-text">Library</span>}
                    </a>

                    {/* Inventory Icon */}
                    <a
                        className="sidebar-link"
                        title="Inventory"
                        onClick={() => openModal('Inventory')}
                    >
                        {theme === 'light' ? <MdInventory2 className="fs-3" /> : <MdInventory className="fs-3" />}
                        {sidebarOpen && <span className="sidebar-text">Inventory</span>}
                    </a>

                    {/* Finance Icon */}
                    <a
                        className="sidebar-link"
                        title="Finance"
                        onClick={() => openModal('Finance')}
                    >
                        {theme === 'light' ? <RiMoneyRupeeCircleFill className="fs-3" /> : < RiMoneyRupeeCircleLine  className="fs-3" />}
                        {sidebarOpen && <span className="sidebar-text">Finance</span>}
                    </a>

                    {/* Bank Icon */}
                    <a
                        className="sidebar-link"
                        title="Bank"
                        onClick={() => openModal('Bank')}
                    >
                        {theme === 'light' ? <BsBank2 className="fs-3" /> : <BsBank className="fs-3" />}
                        {sidebarOpen && <span className="sidebar-text">Bank</span>}
                    </a>
                </div>

                {/* Theme Toggle Button */}
                <div className="theme-toggle-container mt-4">
                    <button
                        onClick={toggleTheme}
                        className={`btn btn-outline-${theme === 'light' ? 'dark' : 'light'} theme-toggle-btn`}
                    >
                        {theme === 'light' ? <HiOutlineMoon /> : <HiSun />}
                        {theme === 'light' ? ' Dark Mode' : ' Light Mode'}
                    </button>
                </div>
            </div>

            {/* Background Fade Effect */}
            {sidebarOpen && (
                <div className="sidebar-overlay" onClick={handleSidebarToggle}></div>
            )}

            {/* Modals */}
            {modalContent === 'Student' && <StudentModal closeModal={closeModal} />}
            {modalContent === 'Library' && <div className="modal-content">Library Modal (placeholder)</div>}
            {modalContent === 'Inventory' && <div className="modal-content">Inventory Modal (placeholder)</div>}
            {modalContent === 'Finance' && <div className="modal-content">Finance Modal (placeholder)</div>}
            {modalContent === 'Bank' && <div className="modal-content">Bank Modal (placeholder)</div>}
        </div>
    );
};
