import React,  { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import { useTheme } from '../ThemeContext'; // Import ThemeContext
// import { ChatBot } from '../ChatBot';
import config from '../config.js';
import MessageParser from '../MessageParser.js';
import ActionProvider from '../ActionProvider.js';
import Chatbot from 'react-chatbot-kit';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { FaBookOpen, FaReply, FaExclamationCircle, FaHandHoldingUsd, FaRupeeSign, FaUserTie } from 'react-icons/fa';
import { FaHistory } from "react-icons/fa"; // Import History icon
// import { FaMessage } from 'react-icons/fa6';
import giv from './giv.png'
// import advancedwebdevelopmentbootcamp from './advancedwebdevelopmentbootcamp.png'
import nvidiaworkshopnoticia from './nvidiaworkshopnoticia.jpg'
import { PiStudentDuotone, PiStudentBold } from "react-icons/pi";
import { CgInsights } from "react-icons/cg";

export const Dashboard = () => {
  const { theme } = useTheme(); // Access the theme from the context
  const [showChatbot, setShowChatbot] = useState(false);
  const [showHistoricalFacts, setShowHistoricalFacts] = useState(false); // State for historical facts



  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
    if (showHistoricalFacts) setShowHistoricalFacts(false); // Close Historical Facts
  };

  const toggleHistoricalFacts = () => {
    setShowHistoricalFacts(!showHistoricalFacts);
    if (showChatbot) setShowChatbot(false); // Close Chatbot
  };


  const navigateToDashboard = () => {
    // Add routing logic here (e.g., React Router's `useNavigate` or a custom handler)
  };




  const revenueConfig = {
    chart: {
      type: 'line',
      backgroundColor: theme === 'light' ? '#ffffff' : '#2c3e50',
    },
    title: {
      text: 'Revenue vs Expenses Over the Years',
      style: { color: theme === 'light' ? '#000' : '#fff' },
    },
    xAxis: {
      categories: ['2019', '2020', '2021', '2022', '2023'], // Years on the X-axis
      labels: {
        style: {
          color: theme === 'light' ? '#000' : '#fff',
        },
      },
      title: {
        text: 'Years',
        style: {
          color: theme === 'light' ? '#000' : '#fff',
        },
      },
    },
    credits: {
      enabled: false,
    },
    legend: {
      itemStyle: {
        color: theme === 'light' ? '#000' : '#fff',
      },
    },
    yAxis: {
      title: {
        text: 'Amount ($)',
        style: {
          color: theme === 'light' ? '#000' : '#fff',
        },
      },
      labels: {
        style: {
          color: theme === 'light' ? '#000' : '#fff',
        },
      },
      gridLineColor: theme === 'light' ? '#ddd' : '#555',
    },
    series: [
      {
        name: 'Revenue',
        data: [5000, 7000, 8500, 11000, 13000], // Revenue data for each year
        color: theme === 'light' ? '#17a2b8' : '#9b59b6',
      },
      {
        name: 'Expenses',
        data: [3000, 4000, 4500, 6000, 7000], // Expenses data for each year
        color: theme === 'light' ? '#e74c3c' : '#e67e22',
      },
    ],
  };



  const upcomingEvents = [
    { title: 'Tech Conference', date: '2024-12-15' },
    { title: 'Workshop on AI', date: '2024-11-30' },
    { title: 'Web Development Bootcamp', date: '2024-12-01' },
  ];

  const [notifications] = useState([
    { id: 1, text: "Notification 1: Your task is due tomorrow.", date: new Date() },
    { id: 2, text: "Notification 2: Your profile is 80% complete.", date: new Date() },
    { id: 3, text: "Notification 3: System maintenance on Sunday.", date: new Date() },
    { id: 4, text: "Notification 4: System maintenance on Sunday.", date: new Date() },
    { id: 5, text: "Notification 5: System maintenance on Sunday.", date: new Date() },
    { id: 6, text: "Notification 6: System maintenance on Sunday.", date: new Date() },
    { id: 7, text: "Notification 7: System maintenance on Sunday.", date: new Date() },
  ]);
  const data = [
    { subject: 'Math', total: 5, marked: 3, unmarked: 2 },
    { subject: 'Physics', total: 4, marked: 2, unmarked: 2 },
    { subject: 'Chemistry', total: 6, marked: 4, unmarked: 2 },
  ];
  const donutChartOptions = {
    chart: {
      type: 'pie',
      backgroundColor: theme === 'light' ? 'white' : '#2c3e50',
      color: theme === 'light' ? '#000' : '#fff'
    },
    title: {
      text: 'Overall Faculty Marking Classes',
      style: { color: theme === 'light' ? '#000' : '#fff' },
    },
    credits: {
      enabled: false,
    },
    legend: {
      itemStyle: {
        color: theme === 'light' ? '#000' : '#fff',
      },
    },
    tooltip: {
      pointFormat: '<b>{point.percentage:.1f}%</b> ({point.y} classes)',
    },
    plotOptions: {
      pie: {
        innerSize: '60%',
        dataLabels: {
          enabled: true,
          formatter: function () {
            return `<b>${this.point.name}</b>: ${this.y} (${this.percentage.toFixed(1)}%)`;
          },
        },
      },
    },
    series: [
      {
        name: 'Attendance',
        colorByPoint: true,
        data: [
          { name: 'Marked', y: 1200, color: '#28a745' },
          { name: 'Unmarked', y: 300, color: '#dc3545' },
        ],
      },
    ],
  };

  const libraryOptions = {
    chart: {
      type: 'bar',
      backgroundColor: theme === 'light' ? '#ffffff' : '#2c3e50',
    },
    title: {
      text: "Monthly Library Activity",
      style: {
        fontSize: '20px',
        color: theme === 'light' ? '#000' : '#fff',
      },
    },
    xAxis: {
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], // Representing weeks of the month
      title: {
        text: 'Weeks',
        style: {
          fontSize: '14px',
          color: theme === 'light' ? '#000' : '#fff'
        },
      },
      labels: {
        style: {
          color: theme === 'light' ? '#000' : '#fff'

        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Number of Books',
        style: {
          fontSize: '14px',
          color: theme === 'light' ? '#000' : '#fff'

        },
      },
      labels: {
        style: {
          color: theme === 'light' ? '#000' : '#fff'

        },
      },
    },
    tooltip: {
      shared: true,
      pointFormat: '{series.name}: <b>{point.y} books</b><br>',
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
          formatter: function () {
            return this.y + ' books';
          },
        },

      },
    },
    credits: {
      enabled: false,
    },
    legend: {
      itemStyle: {
        color: theme === 'light' ? '#000' : '#fff',
      },
    },
    series: [
      {
        name: 'Issued Books',
        data: [150, 200, 180, 220], // Example data for issued books each week
        color: '#FF5733',
      },
      {
        name: 'Returned Books',
        data: [120, 170, 150, 210], // Example data for returned books each week
        color: '#33C2FF',
      },
      {
        name: 'Overdue Books',
        data: [20, 15, 25, 30], // Example data for overdue books each week
        color: '#FFB533',
      },
    ],
  };


  const columnChartOptions = {
    chart: {
      type: 'column',
      backgroundColor: theme === 'light' ? 'white' : '#2c3e50',
    },
    title: {
      text: 'Class Period Breakdown',
      style: { color: theme === 'light' ? '#000' : '#fff' },
    },
    xAxis: {
      categories: ['Period 1', 'Period 2', 'Period 3', 'Period 4', 'Period 5', 'Period 6', 'Period 7', 'Period 8'],
      title: {
        text: 'Periods',
        style: { color: theme === 'light' ? '#000' : '#fff' },
      },
      labels: {
        style: {
          color: theme === 'light' ? '#000' : '#fff',
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Number of Classes',
        style: { color: theme === 'light' ? '#000' : '#fff' },
      },
      labels: {
        style: {
          color: theme === 'light' ? '#000' : '#fff',
        },
      },
      stackLabels: {
        enabled: true,
        formatter: function () {
          return this.total;
        },
        style: {
          color: theme === 'light' ? '#000' : '#fff',
        },
      },
    },
    credits: {
      enabled: false,
    },
    legend: {
      itemStyle: {
        color: theme === 'light' ? '#000' : '#fff',
      },
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br>',
      pointFormat: '{series.name}: {point.y}<br>Total: {point.stackTotal}',
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          formatter: function () {
            return this.y;
          },
        },
      },
    },
    series: [
      {
        name: 'Marked',
        data: [35, 40, 30, 25, 50, 45, 38, 42], // Example data for marked classes
        color: '#28a745',
      },
      {
        name: 'Unmarked',
        data: [10, 5, 15, 20, 8, 12, 10, 7], // Example data for unmarked classes
        color: '#dc3545',
      },
    ],
  };




  const employeeData = [
    { department: 'HR', male: 10, female: 20 },
    { department: 'IT', male: 30, female: 25 },
    { department: 'Finance', male: 15, female: 10 },
    { department: 'Marketing', male: 20, female: 30 },
    { department: 'Operations', male: 25, female: 20 },
    { department: 'Sales', male: 22, female: 18 },
    { department: 'Support', male: 18, female: 22 },
    { department: 'Legal', male: 12, female: 15 },
    { department: 'Procurement', male: 10, female: 14 },
    { department: 'Research', male: 16, female: 12 },
  ];

  // Calculate totals for graph
  const totalMale = employeeData.reduce((sum, dept) => sum + dept.male, 0);
  const totalFemale = employeeData.reduce((sum, dept) => sum + dept.female, 0);

  // Highcharts configuration for the pie chart
  const employeechartOptions = {
    chart: {
      type: 'pie',
      backgroundColor: theme === 'light' ? '#ffffff' : '#2c3e50',
    },
    credits: {
      enabled: false,
    },
    legend: {
      itemStyle: {
        color: theme === 'light' ? '#000' : '#fff',
      },
    },
    title: {
      text: 'Employee Distribution by Gender',


      style: {
        fontSize: '20px',
        color: theme === 'light' ? '#000' : '#fff',
      },
    },
    tooltip: {
      pointFormat: '<b>{point.y} employees</b>',
    },
    series: [
      {
        name: 'Employees',
        colorByPoint: true,
        data: [
          { name: 'Male', y: totalMale, color: '#1E90FF' },
          { name: 'Female', y: totalFemale, color: '#FF69B4' },
        ],
      },
    ],
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f}%',
        },
      },
    },
  };

  const totalTransportEmployees = 150; // Total employees using transportation
  const totalTransportStudents = 200; // Total students using transportation

  const inventoryData = [
    { category: 'Category 1', issued: 10, consumed: 5, expired: 2, expiryIn15Days: true },
    { category: 'Category 2', issued: 8, consumed: 4, expired: 1, expiryIn15Days: false },
    { category: 'Category 3', issued: 12, consumed: 6, expired: 3, expiryIn15Days: true },
  ];

  // Calculations
  const totalIssued = inventoryData.reduce((sum, item) => sum + item.issued, 0);
  const totalConsumed = inventoryData.reduce((sum, item) => sum + item.consumed, 0);

  const tableData = inventoryData.map(item => ({
    category: item.category,
    issued: item.issued,
    consumed: item.consumed,
    expired: item.expired,
    expirySoon: item.expiryIn15Days ? "Yes" : "No",
  }));

  const expiredCount = tableData.reduce((sum, item) => sum + (item.expired || 0), 0);
  const expirySoonCount = tableData.reduce((sum, item) => sum + (item.expirySoon || 0), 0);

  

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#f0f3f5' : 'black' }} className={`dashboard-container ${theme}`}>
      {/* Widgets Section */}
      <div
        className="container-fluid row"
        style={{
          // display: 'flex',
          flexWrap: 'wrap',
          // gap: '20px', // Space between cards
          justifyContent: 'center',
          left: '0'
        }}
      >
        {/* another idea */}
        <div className='row'>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-3 card h-100 shadow-sm"
              style={{ backgroundColor: theme === 'light' ? '#f7f9fc' : '#1e272e', color: theme === 'light' ? '#000' : '#fff', borderRadius: '10px' }}>
              <div className=" text-center"  >
                <h5 className="fw-bold" style={{ backgroundColor: theme === 'light' ? '#f7f9fc' : '#1e272e', color: theme === 'light' ? '#000' : '#fff', borderRadius: '10px' }}>Total Revenue</h5>
                <span className=" fs-6" style={{ color: theme === 'light' ? '#000' : '#fff', borderRadius: '10px' }}>Today’s Stats</span>
              </div>
              <div className="row gap-2 mt-3" >
                <div style={{ backgroundColor: theme === 'light' ? '#e3f2fd' : '#2d3436' }} className="col d-flex justify-content-between align-items-center  shadow-sm rounded">
                  <div>
                    <h6 className="fw-medium mt-2">Fees Received</h6>
                    <span className="fs-5 text-primary">₹50,000</span>
                  </div>
                  <FaRupeeSign className="fs-3 text-primary" />
                </div>

                <div className="col d-flex justify-content-between align-items-center shadow-sm rounded"
                  style={{ backgroundColor: theme === 'light' ? '#fbe9e7' : '#2d3436' }}>
                  <div>
                    <h6 className="fw-medium mt-2">Total Dues</h6>
                    <span className="fs-5 text-danger">₹20,000</span>
                  </div>
                  <FaRupeeSign className="fs-3 text-danger" />
                </div>
              </div>
              <div className="row gap-2 mt-2" >
                <div className="col d-flex justify-content-between align-items-center shadow-sm rounded" style={{ backgroundColor: theme === 'light' ? '#fff7e6' : '#2d3436' }}>
                  <div>
                    <h6 className="fw-medium mt-2">Balanced Fees</h6>
                    <span className="fs-5 text-warning">₹20,000</span>
                  </div>
                  <FaRupeeSign className="fs-3 text-warning" />
                </div>

                <div className="col d-flex justify-content-between align-items-center shadow-sm rounded"
                  style={{ backgroundColor: theme === 'light' ? '#e8f5e9' : '#2d3436' }}>
                  <div>
                    <h6 className="fw-medium mt-2">Till Date</h6>
                    <span className="fs-5 text-success">₹3,00,000</span>
                  </div>
                  <FaRupeeSign className="fs-3 text-success" />
                </div>
              </div>

              <div className="row gap-2 mt-2" >
                <div className="col d-flex justify-content-between align-items-center  shadow-sm rounded"
                  style={{ backgroundColor: theme === 'light' ? '#fbe9e7' : '#2d3436' }}>
                  <div>
                    <h6 className="fw-medium mt-2">Total Over Dues</h6>
                    <span className="fs-5 text-danger">₹20,000</span>
                  </div>
                  <FaRupeeSign className="fs-3 text-danger" />
                </div>

              </div>

              <button
                className="btn btn-primary mt-3 w-100 fw-medium"
                style={{
                  backgroundColor: theme === 'light' ? '#2980b9' : '#16a085',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px',
                }}
              >
                View Detailed Report
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-3 card h-100 shadow-sm"
              style={{ backgroundColor: theme === 'light' ? '#f7f9fc' : '#1e272e', color: theme === 'light' ? '#000' : '#fff', borderRadius: '10px' }}>
              <div className=" text-center">
                <h5 className="fw-bold" style={{ color: theme === 'light' ? '#000' : '#fff', borderRadius: '10px' }}>Library Overview</h5>
                <span className=" fs-6">Today’s Stats</span>
              </div>
              <div className="row gap-2 mt-3 ">
                <div className="col d-flex justify-content-between align-items-center  shadow-sm rounded"
                  style={{ backgroundColor: theme === 'light' ? '#e8f5e9' : '#2d3436' }}>
                  <div>
                    <h6 className="fw-medium mt-2 ">Books Issued</h6>
                    <span className="fs-5 text-primary">45</span>
                  </div>
                  <FaBookOpen className="fs-3 text-primary" />
                </div>
                <div className="col d-flex justify-content-between align-items-center  shadow-sm rounded "
                  style={{ backgroundColor: theme === 'light' ? '#fbe9e7' : '#2d3436' }}>
                  <div>
                    <h6 className="fw-medium mt-2">Books Returned</h6>
                    <span className="fs-5 text-success">30</span>
                  </div>
                  <FaReply className="fs-3 text-success" />
                </div>
              </div>

              <div className="row gap-2 mt-2" >
                <div className="col d-flex justify-content-between align-items-center shadow-sm rounded"
                  style={{ backgroundColor: theme === 'light' ? '#ffebee' : '#2d3436' }}>
                  <div>
                    <h6 className="fw-medium mt-2">Overdue Books</h6>
                    <span className="fs-5 text-danger">15</span>
                  </div>
                  <FaExclamationCircle className="fs-3 text-danger" />
                </div>

                <div className="col d-flex justify-content-between align-items-center  shadow-sm rounded"
                  style={{ backgroundColor: theme === 'light' ? '#ede7f6' : '#2d3436' }}>
                  <div>
                    <h6 className="fw-medium mt-2">Fine Made</h6>
                    <span className="fs-5 text-warning">₹2,000</span>
                  </div>
                  <FaRupeeSign className="fs-3 text-warning" />
                </div>
              </div>
              <div className="row gap-2 mt-2" >
                <div className="col d-flex justify-content-between align-items-center shadow-sm rounded"
                  style={{ backgroundColor: theme === 'light' ? '#e3f2fd' : '#2d3436' }}>
                  <div>
                    <h6 className="fw-medium mt-2">Fine Received</h6>
                    <span className="fs-5 text-info">₹1,500</span>
                  </div>
                  <FaHandHoldingUsd className="fs-3 text-info" />
                </div>
              </div>
              <button
                className="btn btn-primary mt-3 w-100 fw-medium"
                style={{
                  backgroundColor: theme === 'light' ? '#2980b9' : '#16a085',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px',
                }}
              >
                View Detailed Report
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 col-sm-12 p-3">
            <div className="p-3 pt-1 card h-100 shadow-sm"
              style={{ backgroundColor: theme === 'light' ? '#f7f9fc' : '#1e272e', color: theme === 'light' ? '#000' : '#fff', borderRadius: '10px' }}>
              <div className="p-2 text-center">
                <h5 className="fw-bold" style={{ color: theme === 'light' ? '#000' : '#fff', borderRadius: '10px' }}>Year-wise Attendance</h5>
                <span className=" fs-6">Details</span>
              </div>
              <div className="row gap-2 mt-3">

                <div className="col  d-flex justify-content-between align-items-center  shadow-sm rounded"
                  style={{ backgroundColor: theme === 'light' ? '#e8f5e9' : '#2d3436' }}>
                  <div>
                    <h6 className="fw-medium mt-2">1st Year</h6>
                    <span className="fs-6 text-success">Present: 300 <small>(75%)</small></span><br />
                    <span className="fs-6 text-danger">Absent: 100 <small>(25%)</small></span>
                  </div>
                  {theme === 'light' ? <PiStudentDuotone className="fs-3" /> : <PiStudentBold className="fs-3" />}
                </div>

                <div className="col d-flex justify-content-between align-items-center  shadow-sm rounded"
                  style={{ backgroundColor: theme === 'light' ? '#e8f5e9' : '#2d3436' }}>
                  <div>
                    <h6 className="fw-medium mt-2">2nd Year</h6>
                    <span className="fs-6 text-success">Present: 280 <small>(80%)</small></span><br />
                    <span className="fs-6 text-danger">Absent: 70 <small>(20%)</small></span>
                  </div>
                  {theme === 'light' ? <PiStudentDuotone className="fs-3" /> : <PiStudentBold className="fs-3" />}
                </div>
              </div>
              <div className="row gap-2 mt-2">

                <div className="col d-flex justify-content-between align-items-center  shadow-sm rounded"
                  style={{ backgroundColor: theme === 'light' ? '#e8f5e9' : '#2d3436' }}>
                  <div>
                    <h6 className="fw-medium">3rd Year</h6>
                    <span className="fs-6 text-success">Present: 250 <small>(85%)</small></span><br />
                    <span className="fs-6 text-danger">Absent: 50 <small>(15%)</small></span>
                  </div>
                  {theme === 'light' ? <PiStudentDuotone className="fs-3" /> : <PiStudentBold className="fs-3" />}
                </div>

                <div className="col d-flex justify-content-between align-items-center shadow-sm rounded"
                  style={{ backgroundColor: theme === 'light' ? '#e8f5e9' : '#2d3436' }}>
                  <div>
                    <h6 className="fw-medium">Final Year</h6>
                    <span className="fs-6 text-success">Present: 200 <small>(90%)</small></span><br />
                    <span className="fs-6 text-danger">Absent: 20 <small>(10%)</small></span>
                  </div>
                  {theme === 'light' ? <PiStudentDuotone className="fs-3" /> : <PiStudentBold className="fs-3" />}
                </div>

              </div>
              <button
                className="btn btn-primary mt-3 w-100 fw-medium"
                style={{
                  backgroundColor: theme === 'light' ? '#2980b9' : '#16a085',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px',
                }}
              >
                More Insights
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div
              className="p-3 card h-100 shadow-sm"
              style={{
                backgroundColor: theme === 'light' ? '#f7f9fc' : '#1e272e',
                color: theme === 'light' ? '#000' : '#fff',
                borderRadius: '10px',
              }}
            >
              <div className="p-2 text-center">
                <h5 className="fw-bold" style={{ color: theme === 'light' ? '#000' : '#fff', borderRadius: '10px' }}>Total Employees</h5>
                <span className="fs-6">Today’s Stats</span>
              </div>
              <div className=" row gap-2 mt-3">
                <div
                  className="col  d-flex justify-content-between align-items-center  shadow-sm rounded"
                  style={{ backgroundColor: theme === 'light' ? '#e8f5e9' : '#2d3436' }}
                >
                  <div>
                    <h6 className="fw-medium mt-2">Total Present</h6>
                    <span className="fs-5 text-success">{120 + 85}</span>
                  </div>
                  <FaUserTie className="fs-3 text-success" />
                </div>

                <div
                  className="col d-flex justify-content-between align-items-center  shadow-sm rounded"
                  style={{ backgroundColor: theme === 'light' ? '#fbe9e7' : '#2d3436' }}
                >
                  <div>
                    <h6 className="fw-medium mt-2">Total Absent</h6>
                    <span className="fs-5 text-danger">{15 + 5}</span>
                  </div>
                  <FaUserTie className="fs-3 text-danger" />
                </div>
              </div>

              <div className="row gap-2 mt-2">
                <div
                  className="col  d-flex justify-content-between align-items-center  shadow-sm rounded"
                  style={{ backgroundColor: theme === 'light' ? '#ede7f6' : '#2d3436' }}
                >
                  <div>
                    <h6 className="fw-medium mt-2">Non-Teaching</h6>
                    <span className="fs-5 text-primary">{120 + 15}</span>
                  </div>
                  <FaUserTie className="fs-3 text-primary" />
                </div>

                <div
                  className="col  d-flex justify-content-between align-items-center  shadow-sm rounded"
                  style={{ backgroundColor: theme === 'light' ? '#e3f2fd' : '#2d3436' }}
                >
                  <div>
                    <h6 className="fw-medium mt-2">Teaching</h6>
                    <span className="fs-5 text-primary">{85 + 5}</span>
                  </div>
                  <FaUserTie className="fs-3 text-primary" />
                </div>
              </div>
              <div className="row gap-2 mt-2">
                <div
                  className="col  d-flex justify-content-between align-items-center  shadow-sm rounded"
                  style={{ backgroundColor: theme === 'light' ? '#ede7f6' : '#2d3436' }}
                >
                  <div>
                    <h6 className="fw-medium mt-2">Leave</h6>
                    <span className="fs-5 text-primary">{15}</span>
                  </div>
                  <FaUserTie className="fs-3 text-primary" />
                </div>
              </div>


              <button
                className="btn btn-primary mt-3 w-100 fw-medium"
                style={{
                  backgroundColor: theme === 'light' ? '#2980b9' : '#16a085',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px',
                }}
                onClick={() => navigateToDashboard()} // Replace this with your navigation function
              >
                More Insights
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 col-sm-12 p-3">
            <div className="p-3 card h-100 shadow-sm"
              style={{ backgroundColor: theme === 'light' ? '#f7f9fc' : '#1e272e', color: theme === 'light' ? '#000' : '#fff', borderRadius: '10px' }}>
              <div className="p-2 text-center">
                <h5 className="fw-bold" style={{ color: theme === 'light' ? '#000' : '#fff', borderRadius: '10px' }}>Total Students in Hostel</h5>
                <span className="fs-6">Hostel Stats</span>
              </div>
              <div className="row gap-3 mt-3">
                {/* Fees Received Section */}
                <div className="col d-flex justify-content-between align-items-center  shadow-sm rounded"
                  style={{ backgroundColor: theme === 'light' ? '#e8f5e9' : '#2d3436' }}>
                  <div>
                    <h6 className="fw-medium mt-2">Girls Present</h6>
                    <span className="fs-6 text-success">{60}</span>
                  </div>
                  <FaUserTie className="fs-3 text-success" />
                </div>
                <div className="col d-flex justify-content-between align-items-center  shadow-sm rounded"
                  style={{ backgroundColor: theme === 'light' ? '#fbe9e7' : '#2d3436' }}>
                  <div>
                    <h6 className="fw-medium">Boys Present</h6>
                    <span className="fs-5 text-success">{50}</span>
                  </div>
                  <FaUserTie className="fs-3 text-success" />
                </div>
              </div>
              <div className="row gap-2 mt-2">


                <div className="col d-flex justify-content-between align-items-center  shadow-sm rounded"
                  style={{ backgroundColor: theme === 'light' ? '#ede7f6' : '#2d3436' }}>
                  <div>
                    <h6 className="fw-medium">Girls Absent</h6>
                    <span className="fs-6 text-danger">{5}</span>
                  </div>
                  <FaUserTie className="fs-3 text-danger" />
                </div>

                {/* Till Date Section */}
                <div className="col  d-flex justify-content-between align-items-center  shadow-sm rounded"
                  style={{ backgroundColor: theme === 'light' ? '#e3f2fd' : '#2d3436' }}>
                  <div>
                    <h6 className="fw-medium mt-2">Boys Absent</h6>
                    <span className="fs-6 text-danger">{10}</span>
                  </div>
                  <FaUserTie className="fs-3 text-danger" />
                </div>

                <div className="row gap-2 mt-2">

                  {/* Total Over Dues Section */}
                  <div className="col d-flex justify-content-between align-items-center  shadow-sm rounded"
                    style={{ backgroundColor: theme === 'light' ? '#ffebee' : '#2d3436' }}>
                    <div>
                      <h6 className="fw-medium mt-2">Leave</h6>
                      <span className="fs-5 text-warning">{2 + 3}</span>
                    </div>
                    <FaUserTie className="fs-3 text-warning" />
                  </div>
                </div>
              </div>
              <button
                className="btn btn-primary mt-2 w-100 fw-medium"
                style={{
                  backgroundColor: theme === 'light' ? '#2980b9' : '#16a085',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px',
                }}
                onClick={navigateToDashboard}
              >
                <CgInsights className="me-2" />
                More Insights
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 col-sm-12 p-3">
            <div className="p-3 card h-100 shadow-sm"
              style={{ backgroundColor: theme === 'light' ? '#f7f9fc' : '#1e272e', color: theme === 'light' ? '#000' : '#fff', borderRadius: '10px' }}>
              <div className="p-2 text-center">
                <h5 className="fw-bold" style={{ color: theme === 'light' ? '#000' : '#fff', borderRadius: '10px' }}>Transportation Users</h5>
                <span className="fs-6">Today’s Stats</span>
              </div>
              <div className="row gap-2 mt-3">

                <div className="col d-flex justify-content-between align-items-center shadow-sm rounded"
                  style={{ backgroundColor: theme === 'light' ? '#e8f5e9' : '#2d3436' }}>
                  <div>
                    <h6 className="fw-medium">Total Present</h6>
                    <span className="fs-6 text-primary">{100 + 180}</span>
                  </div>
                  <FaUserTie className="fs-3 text-primary" />
                </div>

                <div className="col d-flex justify-content-between align-items-center shadow-sm rounded"
                  style={{ backgroundColor: theme === 'light' ? '#fbe9e7' : '#2d3436' }}>
                  <div>
                    <h6 className="fw-medium ">Total Absent</h6>
                    <span className="fs-6 text-danger">{10 + 20}</span>
                  </div>
                  <FaUserTie className="fs-3 text-danger" />
                </div>
              </div>
              <div className="row gap-2 mt-2">
                <div className="d-flex  gap-2">
                  <div className="col  d-flex justify-content-between align-items-center  shadow-sm rounded"
                    style={{ backgroundColor: theme === 'light' ? '#ede7f6' : '#2d3436' }}>
                    <div>
                      <h6 className="fw-medium mt-2">Employees</h6>
                      <span className="fs-5 text-warning">{totalTransportEmployees}</span>
                    </div>
                    <FaUserTie className="fs-3 text-warning" />
                  </div>

                  <div className="col d-flex justify-content-between align-items-center  shadow-sm rounded"
                    style={{ backgroundColor: theme === 'light' ? '#e3f2fd' : '#2d3436' }}>
                    <div>
                      <h6 className="fw-medium mt-2">Students</h6>
                      <span className="fs-5 text-success">{totalTransportStudents}</span>
                    </div>
                    <FaUserTie className="fs-3 text-success" />
                  </div>
                </div>
                <div className="row gap-2 mt-2">

                  <div className="col  d-flex justify-content-between align-items-center  shadow-sm rounded"
                    style={{ backgroundColor: theme === 'light' ? '#ffebee' : '#2d3436' }}>
                    <div>
                      <h6 className="fw-medium mt-2">Total Users</h6>
                      <span className="fs-5 text-danger">{totalTransportEmployees + totalTransportStudents}</span>
                    </div>
                    <FaUserTie className="fs-3 text-danger" />
                  </div>
                </div>
              </div>
              <button
                className="btn btn-primary mt-2 w-100 fw-medium"
                style={{
                  backgroundColor: theme === 'light' ? '#2980b9' : '#16a085',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px',
                }}
              >
                More Insights
              </button>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 col-sm-12 p-3 ">
            <div
              className="p-3 card h-100 shadow-sm"
              style={{
                backgroundColor: theme === 'light' ? '#f7f9fc' : '#1e272e',
                color: theme === 'light' ? '#000' : '#fff',
                borderRadius: '10px',
              }}
            >
              <div className="p-2 text-center">
                <h5 className="fw-bold" style={{ color: theme === 'light' ? '#000' : '#fff', borderRadius: '10px' }}>Available Inventory</h5>
                <span className="fs-6">Current Overview</span>
              </div>
              <div className="row gap-3 mt-3">
                <div
                  className="col d-flex justify-content-between align-items-center  shadow-sm rounded"
                  style={{
                    backgroundColor: theme === 'light' ? '#e8f5e9' : '#2d3436',
                  }}
                >
                  <div>
                    <h6 className="fw-medium mt-2">Total Issued</h6>
                    <span className="fs-5 text-primary">{totalIssued}</span>
                  </div>
                  <CgInsights className="fs-3 text-primary" />
                </div>
                <div
                  className="col d-flex justify-content-between align-items-center  shadow-sm rounded"
                  style={{
                    backgroundColor: theme === 'light' ? '#fbe9e7' : '#2d3436',
                  }}
                >
                  <div>
                    <h6 className="fw-medium mt-2">Total Consumed</h6>
                    <span className="fs-5 text-danger">{totalConsumed}</span>
                  </div>
                  <CgInsights className="fs-3 text-danger" />
                </div>
              </div>
              <div className="row gap-2 mt-2">
                <div className="d-flex col-12 gap-2">
                  <div
                    className="col d-flex justify-content-between align-items-center  shadow-sm rounded"
                    style={{
                      backgroundColor: theme === 'light' ? '#ede7f6' : '#2d3436',
                    }}
                  >
                    <div>
                      <h6 className="fw-medium mt-2">Available</h6>
                      <span className="fs-6 text-warning">
                        {totalIssued - totalConsumed}
                      </span>
                    </div>
                    <CgInsights className="fs-3 text-warning" />
                  </div>
                  <div
                    className="col d-flex justify-content-between align-items-center  shadow-sm rounded"
                    style={{
                      backgroundColor: theme === 'light' ? '#e3f2fd' : '#2d3436',
                    }}
                  >
                    <div>
                      <h6 className="fw-medium mt-2">Expired</h6>
                      <span className="fs-6 text-success">{expiredCount}</span>
                    </div>
                    <CgInsights className="fs-3 text-success" />
                  </div>

                </div>
                <div className="row gap-2 mt-2">
                  <div
                    className="col  d-flex justify-content-between align-items-center shadow-sm rounded"
                    style={{
                      backgroundColor: theme === 'light' ? '#ffebee' : '#2d3436',
                    }}
                  >
                    <div>
                      <h6 className="fw-medium mt-2">Expiring Soon</h6>
                      <span className="fs-6 text-danger">{expirySoonCount}</span>
                    </div>
                    <CgInsights className="fs-3 text-danger" />
                  </div>
                </div>
              </div>
              <button
                className="btn btn-primary mt-3 w-100 fw-medium"
                style={{
                  backgroundColor: theme === 'light' ? '#2980b9' : '#16a085',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px',
                }}
              >
                View Detailed Report
              </button>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 col-sm-12 p-3">
            <div className="p-3 card h-100 shadow-sm"
              style={{ backgroundColor: theme === 'light' ? '#f7f9fc' : '#1e272e', color: theme === 'light' ? '#000' : '#fff', borderRadius: '10px' }}>
              <div className="p-2 text-center">
                <h5 className="fw-bold" style={{ color: theme === 'light' ? '#000' : '#fff', borderRadius: '10px' }}>Finance Stats</h5>
                <span className="fs-6">Overview</span>
              </div>
              <div className="row gap-3 mt-3">
                <div className="col d-flex justify-content-between align-items-center shadow-sm rounded"
                  style={{ backgroundColor: theme === 'light' ? '#e8f5e9' : '#2d3436' }}>
                  <div>
                    <h6 className="fw-medium mt-2">Money Received</h6>
                    <span className="fs-6 text-success">₹5,000</span>
                  </div>
                  <FaRupeeSign className="fs-3 text-success" />
                </div>

                <div className="col d-flex justify-content-between align-items-center  shadow-sm rounded"
                  style={{ backgroundColor: theme === 'light' ? '#fbe9e7' : '#2d3436' }}>
                  <div>
                    <h6 className="fw-medium mt-2">Money Given</h6>
                    <span className="fs-6 text-danger">₹2,000</span>
                  </div>
                  <FaRupeeSign className="fs-3 text-danger" />
                </div>
              </div>
              <div className="row gap-2 mt-2">

                <div className="d-flex col-12 gap-2">
                  <div className="col d-flex justify-content-between align-items-center   shadow-sm rounded"
                    style={{ backgroundColor: theme === 'light' ? '#ede7f6' : '#2d3436' }}>
                    <div>
                      <h6 className="fw-medium mt-2">Bills Paid</h6>
                      <span className="fs-6 text-success">₹1,500</span>
                    </div>
                    <FaRupeeSign className="fs-3 text-success" />
                  </div>

                  <div className="col d-flex justify-content-between align-items-center   shadow-sm rounded"
                    style={{ backgroundColor: theme === 'light' ? '#e3f2fd' : '#2d3436' }}>
                    <div>
                      <h6 className="fw-medium mt-2">Pending Bills</h6>
                      <span className="fs-6 text-danger">₹1,000</span>
                    </div>
                    <FaRupeeSign className="fs-3 text-danger" />
                  </div>

                </div>
                <div className="row gap-2 mt-2">


                  <div className="col d-flex justify-content-between align-items-center   shadow-sm rounded"
                    style={{ backgroundColor: theme === 'light' ? '#ffebee' : '#2d3436' }}>
                    <div>
                      <h6 className="fw-medium">Till Date</h6>
                      <span className="fs-6 text-success">₹1,50,000</span>
                    </div>
                    <FaRupeeSign className="fs-3 text-success" />
                  </div>
                </div>
              </div>
              <button
                className="btn btn-primary mt-3 w-100 fw-medium"
                style={{
                  backgroundColor: theme === 'light' ? '#2980b9' : '#16a085',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px',
                }}
              >
                View Detailed Report
              </button>
            </div>
          </div>

        </div>
      </div>
      <div className="d-flex flex-wrap px-2 gap-4">
        {/* Carousel Section */}
        <div
          id="eventsCarousel"
          className="flex-grow-1 col-lg-7 col-md-12 carousel slide dashboard-widget shadow-sm rounded p-3"
          style={{
            backgroundColor: theme === "light" ? "#f8f9fa" : "#343a40",
          }}
          data-bs-ride="carousel"
        >
          <h5 className="mb-3" style={{ color: theme === "light" ? "#000" : "#fff" }}>
            Upcoming Events
          </h5>
          <div className="carousel-inner">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="d-flex flex-column align-items-center text-center">
                  <strong
                    style={{ color: theme === "light" ? "#000" : "#fff" }}
                    className="mb-2"
                  >
                    {event.title}
                  </strong>
                  <span
                    style={{ color: theme === "light" ? "#000" : "#fff" }}
                    className="mb-3"
                  >
                    {event.date}
                  </span>
                  <img
                    src={nvidiaworkshopnoticia}
                    alt={event.title}
                    className="img-fluid mb-2"
                    style={{
                      height: "200px",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#eventsCarousel"
            data-bs-slide="prev"
            style={{ color: theme === "light" ? "#000" : "#fff" }}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#eventsCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Notifications Section */}
        <div
          className="col-lg-4 col-md-12  dark:bg-gray-800 shadow-sm rounded p-4 mb-4"
          style={{
            height: "400px",
            backgroundColor: theme === "light" ? "#f8f9fa" : "#343a40",

          }}
        >
          <h5 className="mb-3" style={{ color: theme === "light" ? "#000" : "#fff" }}>
            Latest News
          </h5>
          <div
            className="overflow-auto"
            style={{
              maxHeight: "300px", // Defines the scrollable area
              paddingRight: "8px",
            }}
          >
            <ul className="space-y-3">
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className="bg-blue-100 dark:bg-blue-900 p-3 rounded-md shadow-sm"
                  style={{ color: theme === "light" ? "#000" : "#fff" }}

                >
                  <p className="mb-1" style={{ color: theme === "light" ? "#000" : "#fff" }}>
                    {notification.text}
                  </p>
                  <span className="text-sm text-gray-500 dark:text-gray-400" style={{ color: theme === "light" ? "#000" : "#fff" }}
                  >
                    {notification.date.toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="row g-4 mb-3" >
        {/* Existing Chart */}
        <div className="col-md-6" style={{ backgroundColor: theme === 'light' ? 'white' : '#2c3e50', color: theme === 'light' ? '#000' : '#fff' }}>
          <HighchartsReact highcharts={Highcharts} options={revenueConfig} />
        </div>

        {/* Donut Chart: Overall Attendance */}
        <div className="col-md-6" >
          <HighchartsReact highcharts={Highcharts} options={donutChartOptions} />
        </div>

        {/* Stacked Column Chart: Department/Class Breakdown */}
        <div className="col-md-12">
          <HighchartsReact highcharts={Highcharts} options={columnChartOptions} />
        </div>
      </div>
      {/* Charts Section */}
      <div className='row'>
        <div className='col' style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <HighchartsReact highcharts={Highcharts} options={libraryOptions} />
          </div>
          <div style={{ flex: 1 }}>
            <HighchartsReact highcharts={Highcharts} options={employeechartOptions} />
          </div>
        </div>

      </div>

      {/* Tables and News */}
      <button
        className="chatbot-toggle-button btn btn-secondary"
        style={{
          position: "fixed",
          bottom: "150px",
          right: "20px", // Adjust for spacing from other buttons
          zIndex: 1000,
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          padding: 0, // Remove padding for the image to fit perfectly
        }}
        onClick={toggleChatbot} // Call function to toggle the chatbot visibility
      >
        <img
          src={giv} // Replace with the image for chatbot toggle
          alt="Chatbot"
          style={{
            width: "100%", // Make the image fill the button size
            height: "100%",
            borderRadius: "50%", // Optional, if you want the image to be circular
          }}
        />
      </button>
      {/* Historical Facts Toggle Button */}
      <div>
        {/* Toggle Buttons */}
        <button
          className="historical-toggle-button btn btn-secondary"
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            zIndex: 1000,
            borderRadius: "50%",
            width: "50px",
            height: "50px",
          }}
          onClick={toggleHistoricalFacts}
        >
          <FaHistory size={20} color="white" />
        </button>


        {/* Historical Facts */}
        {showHistoricalFacts && (
          <div
            className="historical-facts-container animate__animated animate__fadeInUp border border-primary"
            style={{
              position: "fixed",
              bottom: "50px",
              right: "80px",
              zIndex: 1000,
              backgroundColor: theme === "light" ? "#ffffff" : "#2c3e50",
              color: theme === "light" ? "#000" : "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
              width: "600px",
              height: "550px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column", // Ensures a column layout
            }}
          >

            <button
              className="close-button btn btn-sm btn-danger"
              style={{
                position: "absolute",
                top: "-2px",
                right: "-4px",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
              }}
              onClick={() => setShowHistoricalFacts(false)}
            >
              &times;
            </button>
            <div
              style={{
                backgroundColor: theme === "light" ? "#ffffff" : "#2c3e50",
                zIndex: 10,
                padding: "10px 0",
                borderBottom: "2px solid #ddd", // Divider below heading
                textAlign: "center",
              }}
            >
              <h4 style={{ margin: 0 }}>Historical Facts</h4>
            </div>
            <div
              className="scrolling-facts"
              style={{
                flex: 1, // Fills the remaining space below the heading
                overflowY: "auto", // Enables vertical scrolling
                padding: "10px",
                cursor: "grab",
              }}
            >
              {[
                "Fact 1: The Great Wall of China is visible from space.",
                "Fact 2: Alexander the Great was tutored by Aristotle.",
                "Fact 3: The pyramids of Egypt are over 4,500 years old.",
                "Fact 4: The Roman Empire lasted over 1,000 years.",
                "Fact 5: The first Olympics were held in 776 BCE.",
              ].map((fact, index) => (
                <div
                  key={index}
                  style={{
                    padding: "15px 0",
                    borderBottom: "1px solid #ddd", // Divider for each fact
                  }}
                >
                  {fact}
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Chatbot */}
        {showChatbot && (
          <div
            className="chatbot-container animate__animated animate__fadeInUp border border-primary"
            style={{
              position: "fixed",
              bottom: "150px",
              right: "70px", // Shifted left
              zIndex: 1000,
              backgroundColor: theme === "light" ? "#ffffff" : "#2c3e50",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              maxWidth: "1700px",
              minHeight: "500px",
            }}
          >
            <button
              className="close-button btn btn-sm btn-danger"
              style={{
                position: "absolute",
                top: "-4px",
                right: "-8px",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
              }}
              onClick={() => setShowChatbot(false)}
            >
              &times;
            </button>
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        )}
      </div>


      {/* Historical Facts */}

    </div >
  );
};
