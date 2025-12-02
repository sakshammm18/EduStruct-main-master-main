

import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Navbar from './Navbar';  
import Footer from './Footer';
mapboxgl.accessToken = 'pk.eyJ1IjoiYWJoaXNoZWt2MTgiLCJhIjoiY205dG9xZ3F6MDE0NDJxc2NxYzZjdWIweCJ9.B39Ktze6T3DlROoyZe3weg';

const SchoolMap = () => {
  const mapContainer = useRef(null);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSchool, setActiveSchool] = useState(null);
  const [mapInstance, setMapInstance] = useState(null);
  const [markers, setMarkers] = useState([]);

  const schoolData = [
    
      {
     
        "schoolName": "Government Primary School Rasoolpur",
        "longitude": 83.3516,
        "latitude": 26.7654,
        "status": "Fully Furnished"
      },
      {
      
        "schoolName": "Government Inter College Gorakhnath",
        "longitude": 83.3814,
        "latitude": 26.7765,
        "status": "Fully Furnished"
      },
      {
      
        "schoolName": "Government Girls High School Gorakhpur",
        "longitude": 83.3692,
        "latitude": 26.7589,
        "status": "Partially Equipped"
      },
      {
        "id": 4,
        "schoolName": "Zila Parishad School Kushinagar Road",
        "longitude": 83.4012,
        "latitude": 26.7489,
        "status": "Needs Improvement"
      },
      {
        "id": 5,
        "schoolName": "Government Primary School Belghat",
        "longitude": 83.3102,
        "latitude": 26.7912,
        "status": "Partially Equipped"
      },
      {
        "id": 6,
        "schoolName": "Model Primary School Pipraich",
        "longitude": 83.4321,
        "latitude": 26.8246,
        "status": "Fully Furnished"
      },
      {
        "id": 7,
        "schoolName": "Government Middle School Sahjanwa",
        "longitude": 83.2198,
        "latitude": 26.7541,
        "status": "Needs Improvement"
      },
      {
        "id": 8,
        "schoolName": "Adarsh Vidyalaya Campierganj",
        "longitude": 83.3325,
        "latitude": 26.9021,
        "status": "Partially Equipped"
      },
      {
        "id": 9,
        "schoolName": "Government Primary School Jungle Dhoosar",
        "longitude": 83.3854,
        "latitude": 26.7128,
        "status": "Needs Improvement"
      },
      {
        "id": 10,
        "schoolName": "Kasturba Gandhi Balika Vidyalaya Bansgaon",
        "longitude": 83.3472,
        "latitude": 26.5471,
        "status": "Fully Furnished"
      },
      {
        "id": 11,
        "schoolName": "Government High School Khorabar",
        "longitude": 83.4026,
        "latitude": 26.7898,
        "status": "Partially Equipped"
      },
      {
        "id": 12,
        "schoolName": "Government Primary School Gagaha",
        "longitude": 83.2174,
        "latitude": 26.8302,
        "status": "Needs Improvement"
      },
      {
        "id": 13,
        "schoolName": "Government Junior High School Badhalganj",
        "longitude": 83.5174,
        "latitude": 26.6213,
        "status": "Partially Equipped"
      },
      {
        "id": 14,
        "schoolName": "Model Primary School Sardarnagar",
        "longitude": 83.3624,
        "latitude": 26.7421,
        "status": "Fully Furnished"
      },
      {
        "id": 15,
        "schoolName": "Government Inter College Khajani",
        "longitude": 83.1245,
        "latitude": 26.6721,
        "status": "Partially Equipped"
      },
      {
        "id": 16,
        "schoolName": "Government Primary School Bhathat",
        "longitude": 83.4127,
        "latitude": 26.7124,
        "status": "Needs Improvement"
      },
      {
        "id": 17,
        "schoolName": "Government Girls Inter College Gorakhpur",
        "longitude": 83.3741,
        "latitude": 26.7623,
        "status": "Fully Furnished"
      },
      {
        "id": 18,
        "schoolName": "Government Primary School Chiluatal",
        "longitude": 83.3896,
        "latitude": 26.7932,
        "status": "Partially Equipped"
      },
      {
        "id": 19,
        "schoolName": "Government Middle School Mundera Bazar",
        "longitude": 83.3254,
        "latitude": 26.6895,
        "status": "Needs Improvement"
      },
      {
        "id": 20,
        "schoolName": "Sarvodaya Vidyalaya Urwa",
        "longitude": 83.3578,
        "latitude": 26.7328,
        "status": "Fully Furnished"
      },
      {
        "id": 21,
        "schoolName": "Government Primary School Ramgarh Tal",
        "longitude": 83.3871,
        "latitude": 26.7742,
        "status": "Partially Equipped"
      },
      {
        "id": 22,
        "schoolName": "Government High School Chargawan",
        "longitude": 83.2987,
        "latitude": 26.8541,
        "status": "Needs Improvement"
      },
      {
        "id": 23,
        "schoolName": "Government Primary School Laxmipur",
        "longitude": 83.3265,
        "latitude": 26.7128,
        "status": "Partially Equipped"
      },
      {
        "id": 24,
        "schoolName": "Kasturba Gandhi Balika Vidyalaya Pipraich",
        "longitude": 83.4415,
        "latitude": 26.8301,
        "status": "Fully Furnished"
      },
      {
        "id": 25,
        "schoolName": "Government Primary School Kauriram",
        "longitude": 83.3154,
        "latitude": 26.6954,
        "status": "Needs Improvement"
      },
      {
        "id": 26,
        "schoolName": "Government Inter College Pali",
        "longitude": 83.4562,
        "latitude": 26.7124,
        "status": "Partially Equipped"
      },
      {
        "id": 27,
        "schoolName": "Government Girls High School Sahjanwa",
        "longitude": 83.2245,
        "latitude": 26.7512,
        "status": "Fully Furnished"
      },
      {
        "id": 28,
        "schoolName": "Government Primary School Jungle Kaudia",
        "longitude": 83.3921,
        "latitude": 26.6512,
        "status": "Needs Improvement"
      },
      {
        "id": 29,
        "schoolName": "Adarsh Vidyalaya Gola",
        "longitude": 83.2841,
        "latitude": 26.8245,
        "status": "Partially Equipped"
      },
      {
        "id": 30,
        "schoolName": "Government Middle School Barhalganj",
        "longitude": 83.5184,
        "latitude": 26.2845,
        "status": "Fully Furnished"
      },
      {
        "id": 31,
        "schoolName": "Government Primary School Kasia Road",
        "longitude": 83.3984,
        "latitude": 26.7654,
        "status": "Needs Improvement"
      },
      {
        "id": 32,
        "schoolName": "Government Inter College Khorabar",
        "longitude": 83.4012,
        "latitude": 26.7813,
        "status": "Partially Equipped"
      },
      {
        "id": 33,
        "schoolName": "Government Primary School Basantpur",
        "longitude": 83.2984,
        "latitude": 26.7124,
        "status": "Fully Furnished"
      },
      {
        "id": 34,
        "schoolName": "Government Girls High School Pipraich",
        "longitude": 83.4321,
        "latitude": 26.8312,
        "status": "Needs Improvement"
      },
      {
        "id": 35,
        "schoolName": "Government Primary School Maharajganj Road",
        "longitude": 83.4521,
        "latitude": 26.8124,
        "status": "Partially Equipped"
      },
      {
        "id": 36,
        "schoolName": "Sarvodaya Vidyalaya Gita Press",
        "longitude": 83.3621,
        "latitude": 26.7512,
        "status": "Fully Furnished"
      },
      {
        "id": 37,
        "schoolName": "Government Middle School Bargadwa",
        "longitude": 83.3215,
        "latitude": 26.6921,
        "status": "Needs Improvement"
      },
      {
        "id": 38,
        "schoolName": "Government Primary School Rapti Nagar",
        "longitude": 83.3741,
        "latitude": 26.7329,
        "status": "Partially Equipped"
      },
      {
        "id": 39,
        "schoolName": "Kasturba Gandhi Balika Vidyalaya Campierganj",
        "longitude": 83.3321,
        "latitude": 26.9054,
        "status": "Fully Furnished"
      },
      {
        "id": 40,
        "schoolName": "Government High School Gulahria",
        "longitude": 83.2541,
        "latitude": 26.7213,
        "status": "Needs Improvement"
      },
      {
        "id": 41,
        "schoolName": "Government Primary School Jhangha",
        "longitude": 83.5142,
        "latitude": 26.6987,
        "status": "Partially Equipped"
      },
      {
        "id": 42,
        "schoolName": "Government Inter College Sahjanwa",
        "longitude": 83.2241,
        "latitude": 26.7584,
        "status": "Fully Furnished"
      },
      {
        "id": 43,
        "schoolName": "Government Primary School Civil Lines",
        "longitude": 83.3645,
        "latitude": 26.7512,
        "status": "Needs Improvement"
      },
      {
        "id": 44,
        "schoolName": "Government Middle School Belipar",
        "longitude": 83.3874,
        "latitude": 26.6321,
        "status": "Partially Equipped"
      },
      {
        "id": 45,
        "schoolName": "Adarsh Vidyalaya Khorabar",
        "longitude": 83.4035,
        "latitude": 26.7921,
        "status": "Fully Furnished"
      },
      {
        "id": 46,
        "schoolName": "Government Primary School Mohaddipur",
        "longitude": 83.3215,
        "latitude": 26.7812,
        "status": "Needs Improvement"
      },
      {
        "id": 47,
        "schoolName": "Government Girls High School Bansgaon",
        "longitude": 83.3487,
        "latitude": 26.5489,
        "status": "Partially Equipped"
      },
      {
        "id": 48,
        "schoolName": "Government Primary School Domingarh",
        "longitude": 83.3647,
        "latitude": 26.7389,
        "status": "Fully Furnished"
      },
      {
        "id": 49,
        "schoolName": "Government Inter College Pipraich",
        "longitude": 83.4354,
        "latitude": 26.8284,
        "status": "Needs Improvement"
      },
      {
        "id": 50,
        "schoolName": "Government Primary School Padri Bazar",
        "longitude": 83.3514,
        "latitude": 26.7414,
        "status": "Partially Equipped"
      },
      {
        "id": 51,
        "schoolName": "Sarvodaya Vidyalaya Gorakhnath",
        "longitude": 83.3824,
        "latitude": 26.7712,
        "status": "Fully Furnished"
      },
      {
        "id": 52,
        "schoolName": "Government Middle School Kusmi",
        "longitude": 83.2184,
        "latitude": 26.6512,
        "status": "Needs Improvement"
      },
      {
        "id": 53,
        "schoolName": "Government Primary School Shahpur",
        "longitude": 83.3712,
        "latitude": 26.7219,
        "status": "Partially Equipped"
      },
      {
        "id": 54,
        "schoolName": "Kasturba Gandhi Balika Vidyalaya Sahjanwa",
        "longitude": 83.2228,
        "latitude": 26.7545,
        "status": "Fully Furnished"
      },
      {
        "id": 55,
        "schoolName": "Government High School Bhathat",
        "longitude": 83.4158,
        "latitude": 26.7178,
        "status": "Needs Improvement"
      },
      {
        "id": 56,
        "schoolName": "Government Primary School Railway Colony",
        "longitude": 83.3698,
        "latitude": 26.7589,
        "status": "Partially Equipped"
      },
      {
        "id": 57,
        "schoolName": "Government Inter College Campierganj",
        "longitude": 83.3341,
        "latitude": 26.9035,
        "status": "Fully Furnished"
      },
      {
        "id": 58,
        "schoolName": "Government Primary School Ghosi",
        "longitude": 83.2841,
        "latitude": 26.7923,
        "status": "Needs Improvement"
      },
      {
        "id": 59,
        "schoolName": "Government Middle School Urwa",
        "longitude": 83.3541,
        "latitude": 26.7321,
        "status": "Partially Equipped"
      },
      {
        "id": 60,
        "schoolName": "Adarsh Vidyalaya Sahjanwa",
        "longitude": 83.2235,
        "latitude": 26.7574,
        "status": "Fully Furnished"
      },
      {
        "id": 61,
        "schoolName": "Government Primary School Gorakhnath Temple Road",
        "longitude": 83.3823,
        "latitude": 26.7789,
        "status": "Needs Improvement"
      },
      {
        "id": 62,
        "schoolName": "Government Girls High School Khajani",
        "longitude": 83.1287,
        "latitude": 26.6745,
        "status": "Partially Equipped"
      },
      {
        "id": 63,
        "schoolName": "Government Primary School Rustampur",
        "longitude": 83.3798,
        "latitude": 26.7123,
        "status": "Fully Furnished"
      },
      {
        "id": 64,
        "schoolName": "Government Inter College Bansgaon",
        "longitude": 83.3489,
        "latitude": 26.5498,
        "status": "Needs Improvement"
      },
      {
        "id": 65,
        "schoolName": "Government Primary School Chaksa Husain",
        "longitude": 83.3219,
        "latitude": 26.7619,
        "status": "Partially Equipped"
      },
      {
        "id": 66,
        "schoolName": "Sarvodaya Vidyalaya Medical College Road",
        "longitude": 83.3741,
        "latitude": 26.7891,
        "status": "Fully Furnished"
      },
      {
        "id": 67,
        "schoolName": "Government Middle School Mahewa",
        "longitude": 83.3841,
        "latitude": 26.7341,
        "status": "Needs Improvement"
      },
      {
        "id": 68,
        "schoolName": "Government Primary School Rajendra Nagar",
        "longitude": 83.3692,
        "latitude": 26.7492,
        "status": "Partially Equipped"
      },
      {
        "id": 69,
        "schoolName": "Kasturba Gandhi Balika Vidyalaya Khajani",
        "longitude": 83.1265,
        "latitude": 26.6732,
        "status": "Fully Furnished"
      },
      {
        "id": 70,
        "schoolName": "Government High School Gagaha",
        "longitude": 83.2198,
        "latitude": 26.8321,
        "status": "Needs Improvement"
      },
      {
        "id": 71,
        "schoolName": "Government Primary School Bichhia",
        "longitude": 83.4321,
        "latitude": 26.6921,
        "status": "Partially Equipped"
      },
      {
        "id": 72,
        "schoolName": "Government Inter College Chargawan",
        "longitude": 83.2989,
        "latitude": 26.8567,
        "status": "Fully Furnished"
      },
      {
        "id": 73,
        "schoolName": "Government Primary School Harnahi",
        "longitude": 83.1984,
        "latitude": 26.7821,
        "status": "Needs Improvement"
      },
      {
        "id": 74,
        "schoolName": "Government Middle School Pali",
        "longitude": 83.4587,
        "latitude": 26.7167,
        "status": "Partially Equipped"
      },
      {
        "id": 75,
        "schoolName": "Adarsh Vidyalaya Pipraich",
        "longitude": 83.4341,
        "latitude": 26.8267,
        "status": "Fully Furnished"
      },
      {
        "id": 76,
        "schoolName": "Government Primary School Humayunpur",
        "longitude": 83.3214,
        "latitude": 26.7214,
        "status": "Needs Improvement"
      },
      {
        "id": 77,
        "schoolName": "Government Girls High School Chargawan",
        "longitude": 83.2974,
        "latitude": 26.8521,
        "status": "Partially Equipped"
      },
      {
        "id": 78,
        "schoolName": "Government Primary School Tikri",
        "longitude": 83.2741,
        "latitude": 26.6741,
        "status": "Fully Furnished"
      },
      {
        "id": 79,
        "schoolName": "Government Inter College Gola",
        "longitude": 83.2865,
        "latitude": 26.8267,
        "status": "Needs Improvement"
      },
      {
        "id": 80,
        "schoolName": "Government Primary School Bargadwa",
        "longitude": 83.3241,
        "latitude": 26.6941,
        "status": "Partially Equipped"
      },
      {
        "id": 81,
        "schoolName": "Sarvodaya Vidyalaya Taramandal Road",
        "longitude": 83.3798,
        "latitude": 26.7598,
        "status": "Fully Furnished"
      },
      {
        "id": 82,
        "schoolName": "Government Middle School Piprauli",
        "longitude": 83.4741,
        "latitude": 26.7841,
        "status": "Needs Improvement"
      },
      {
        "id": 83,
        "schoolName": "Government Primary School Jatepur",
        "longitude": 83.3541,
        "latitude": 26.6541,
        "status": "Partially Equipped"
      },
      {
        "id": 84,
        "schoolName": "Kasturba Gandhi Balika Vidyalaya Gola",
        "longitude": 83.2874,
        "latitude": 26.8287,
        "status": "Fully Furnished"
      },
      {
        "id": 85,
        "schoolName": "Government High School Pipraich",
        "longitude": 83.4342,
        "latitude": 26.8298,
        "status": "Needs Improvement"
      },
      {
        "id": 86,
        "schoolName": "Government Primary School Bhatauli",
        "longitude": 83.3142,
        "latitude": 26.7042,
        "status": "Partially Equipped"
      },
      {
        "id": 87,
        "schoolName": "Government Inter College Bhathat",
        "longitude": 83.4168,
        "latitude": 26.7167,
        "status": "Fully Furnished"
      },
      {
        "id": 88,
        "schoolName": "Government Primary School Vishunpura",
        "longitude": 83.3967,
        "latitude": 26.7267,
        "status": "Needs Improvement"
      },
      {
        "id": 89,
        "schoolName": "Government Middle School Barhaj Road",
        "longitude": 83.4567,
        "latitude": 26.6167,
        "status": "Partially Equipped"
      },
      {
        "id": 90,
        "schoolName": "Adarsh Vidyalaya Khajani",
        "longitude": 83.1274,
        "latitude": 26.6754,
        "status": "Fully Furnished"
      },
      {
        "id": 91,
        "schoolName": "Government Primary School Kasia",
        "longitude": 83.3987,
        "latitude": 26.7667,
        "status": "Needs Improvement"
      },
      {
        "id": 92,
        "schoolName": "Government Girls High School Gola",
        "longitude": 83.2854,
        "latitude": 26.8274,
        "status": "Partially Equipped"
      },
      {
        "id": 93,
        "schoolName": "Government Primary School Kusmi",
        "longitude": 83.2165,
        "latitude": 26.6534,
        "status": "Fully Furnished"
      },
      {
        "id": 94,
        "schoolName": "Government Inter College Urwa",
        "longitude": 83.3547,
        "latitude": 26.7341,
        "status": "Needs Improvement"
      },
      {
        "id": 95,
        "schoolName": "Government Primary School Pandeyhata",
        "longitude": 83.3641,
        "latitude": 26.7841,
        "status": "Partially Equipped"
      },
      {
        "id": 96,
        "schoolName": "Sarvodaya Vidyalaya University Road",
        "longitude": 83.3712,
        "latitude": 26.7612,
        "status": "Fully Furnished"
      },
      {
        "id": 97,
        "schoolName": "Government Middle School Baitalpur",
        "longitude": 83.2641,
        "latitude": 26.8941,
        "status": "Needs Improvement"
      },
      {
        "id": 98,
        "schoolName": "Government Primary School Dharamshala",
        "longitude": 83.3598,
        "latitude": 26.7498,
        "status": "Partially Equipped"
      },
      {
        "id": 99,
        "schoolName": "Kasturba Gandhi Balika Vidyalaya Bhathat",
        "longitude": 83.4142,
        "latitude": 26.7142,
        "status": "Fully Furnished"
      },
      {
        "id": 100,
        "schoolName": "Government High School Bansgaon",
        "longitude": 83.3467,
        "latitude": 26.5467,
        "status": "Needs Improvement"
      }
    

];

  // Add city property to all schools if not present
  const enhancedSchoolData = schoolData.map(school => {
    if (!school.city) {
      // Determine city based on coordinates
      if (school.longitude > 83 && school.longitude < 84) {
        return { ...school, city: "Gorakhpur" };
      } else {
        return { ...school, city: "Lucknow" };
      }
    }
    return school;
  });

  // Extract unique cities
  const cities = ['all', ...new Set(enhancedSchoolData.map(school => school.city))];

  // Status options with colors for legend
  const statusOptions = [
    { value: 'all', label: 'All Statuses', color: '#808080' },
    { value: 'Fully Furnished', label: 'Fully Furnished', color: '#4caf50' },
    { value: 'Partially Equipped', label: 'Partially Equipped', color: '#ffc107' },
    { value: 'Needs Improvement', label: 'Needs Improvement', color: '#f44336' }
  ];

  // Filter schools based on selected filters
  const getFilteredSchools = () => {
    return enhancedSchoolData.filter(school => {
      const matchesStatus = selectedStatus === 'all' || school.status === selectedStatus;
      const matchesCity = selectedCity === 'all' || school.city === selectedCity;
      const matchesSearch = searchTerm === '' || 
        school.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesStatus && matchesCity && matchesSearch;
    });
  };

  // Function to get color based on status
  const getStatusColor = (status) => {
    switch(status) {
      case 'Fully Furnished': return '#4caf50'; // green
      case 'Partially Equipped': return '#ffc107'; // yellow/amber
      case 'Needs Improvement': return '#f44336'; // red
      default: return '#808080'; // gray
    }
  };

  // Initialize and update map
  useEffect(() => {
    // Create map if it doesn't exist
    if (!mapInstance) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v10',
        center: [82.9739, 26.7610], // Centered better for both cities
        zoom: 5.5,
      });

      // Add map controls
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');
      map.addControl(new mapboxgl.FullscreenControl(), 'top-right');
      map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: { enableHighAccuracy: true },
        trackUserLocation: true
      }), 'top-right');

      // Save map instance
      setMapInstance(map);
    }
  }, []);

  // Add/update markers when filters change or map is ready
  useEffect(() => {
    if (!mapInstance) return;

    // Remove existing markers
    markers.forEach(marker => marker.remove());

    // Get filtered schools and add new markers
    const filteredSchools = getFilteredSchools();
    const newMarkers = filteredSchools.map(school => {
      const color = getStatusColor(school.status);
      
      // Create marker element with custom design
      const markerEl = document.createElement('div');
      markerEl.className = 'custom-marker';
      markerEl.style.backgroundColor = color;
      markerEl.style.width = '20px';
      markerEl.style.height = '20px';
      markerEl.style.borderRadius = '50%';
      markerEl.style.border = '2px solid white';
      markerEl.style.boxShadow = '0 0 5px rgba(0,0,0,0.3)';
      
      // Create and add marker
      const marker = new mapboxgl.Marker(markerEl)
        .setLngLat([school.longitude, school.latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 25, closeButton: true })
            .setHTML(`
              <div style="font-family: 'Roboto', sans-serif;">
                <h3 style="font-weight: 600; margin-bottom: 5px;">${school.name}</h3>
                <p><strong>City:</strong> ${school.city}</p>
                <p><strong>Status:</strong> <span style="color:${color}; font-weight: 600;">${school.status.replace(/-/g, ' ')}</span></p>
              </div>
            `)
        )
        .addTo(mapInstance);
        
      marker.getElement().addEventListener('click', () => {
        setActiveSchool(school);
      });
        
      return marker;
    });
    
    setMarkers(newMarkers);
    
    // Fit map to show all filtered markers if there are any
    if (filteredSchools.length > 0) {
      const bounds = new mapboxgl.LngLatBounds();
      filteredSchools.forEach(school => {
        bounds.extend([school.longitude, school.latitude]);
      });
      
      mapInstance.fitBounds(bounds, {
        padding: { top: 50, bottom: 50, left: 50, right: 50 },
        maxZoom: 15
      });
    }
  }, [mapInstance, selectedStatus, selectedCity, searchTerm]);

  return (
    <div className="min-h-screen flex flex-col  bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 ">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#101c2c] to-[#1b3a5c] text-white px-6 py-4">
            <h2 className="text-2xl font-bold">Interactive School Map</h2>
            <p className="text-blue-100">Explore school infrastructure status across cities</p>
          </div>
          
          {/* Filters */}
          <div className="bg-blue-50 px-6 py-4 flex flex-wrap gap-4 items-center border-b border-blue-100">
            <div className="flex-grow min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 mb-1">Search School</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by school name..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Status</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {statusOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Filter by City</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {cities.map(city => (
                  <option key={city} value={city}>
                    {city === 'all' ? 'All Cities' : city}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Map container */}
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-3/4">
              <div 
                ref={mapContainer} 
                className="w-full h-[600px]" 
                style={{ position: 'relative' }}
              />
              
              {/* Legend */}
              <div className="absolute bottom-8 left-8 bg-white p-3 rounded-md shadow-md z-10 border border-gray-200">
                <h4 className="font-semibold text-sm mb-2">School Status</h4>
                {statusOptions.slice(1).map(status => (
                  <div key={status.value} className="flex items-center mb-1">
                    <div
                      className="w-4 h-4 mr-2 rounded-full"
                      style={{ backgroundColor: status.color }}
                    />
                    <span className="text-xs">{status.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* School list sidebar */}
            <div className="w-full md:w-1/4 border-l border-gray-200 bg-white overflow-y-auto h-[600px]">
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <h3 className="font-semibold">
                  {getFilteredSchools().length} Schools {selectedCity !== 'all' ? `in ${selectedCity}` : ''}
                </h3>
              </div>
              
              <div className="divide-y divide-gray-200">
                {getFilteredSchools().map((school, index) => (
                  <div 
                    key={index}
                    className={`p-3 cursor-pointer hover:bg-blue-50 transition-colors ${activeSchool === school ? 'bg-blue-50 border-l-4 border-blue-500' : ''}`}
                    onClick={() => {
                      setActiveSchool(school);
                      mapInstance.flyTo({
                        center: [school.longitude, school.latitude],
                        zoom: 14
                      });
                      
                      // Find and click the marker to show popup
                      markers.forEach(marker => {
                        const markerLngLat = marker.getLngLat();
                        if (markerLngLat.lng === school.longitude && markerLngLat.lat === school.latitude) {
                          marker.togglePopup();
                        }
                      });
                    }}
                  >
                    <h4 className="font-medium text-sm">{school.schoolName}</h4>
                    <div className="flex items-center mt-1">
                      <div 
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: getStatusColor(school.status) }}
                      />
                      <span className="text-xs text-gray-600 capitalize">
                        {school.status.replace(/-/g, ' ')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Info box */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div>
                <span className="font-medium">Fully Furnished:</span> {enhancedSchoolData.filter(s => s.status === 'Fully Furnished').length} schools
              </div>
              <div>
                <span className="font-medium">Partially Equipped:</span> {enhancedSchoolData.filter(s => s.status === 'Partially Equipped').length} schools
              </div>
              <div>
                <span className="font-medium">Needs Improvement:</span> {enhancedSchoolData.filter(s => s.status === 'Needs Improvement').length} schools
              </div>
              <div>
                <span className="font-medium">Total:</span> {enhancedSchoolData.length} schools
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      
      {/* Add custom styles */}
      <style jsx>{`
        .mapboxgl-popup-content {
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .mapboxgl-popup-close-button {
          font-size: 18px;
          color: #666;
          padding: 5px;
        }
      `}</style>
    </div>
  );
};

export default SchoolMap;