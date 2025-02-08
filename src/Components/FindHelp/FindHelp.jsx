import React from "react";
import "./FindHelp.css";
import { FaDirections } from "react-icons/fa";

const CitySearch = () => {

    const hospitals = [
        { name: "City Hospital", beds: 10, location: "https://maps.google.com" },
        { name: "Greenwood Medical", beds: 5, location: "https://maps.google.com" },
        { name: "Metro Health", beds: 2, location: "https://maps.google.com" },
    ];

    const shelters = [
        { name: "Shelter A", capacity: 20, location: "https://maps.google.com" },
        { name: "Shelter B", capacity: 15, location: "https://maps.google.com" },
        { name: "Shelter C", capacity: 8, location: "https://maps.google.com" },
    ];

    return (
        <div className="container">
            <h2 className="section-title">Hospitals</h2>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Hospital Name</th>
                            <th>Beds Available</th>
                            <th>Directions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hospitals.map((hospital, index) => (
                            <tr key={index}>
                                <td>{hospital.name}</td>
                                <td>{hospital.beds}</td>
                                <td>
                                    <a
                                        href={hospital.location}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-direction"
                                    >
                                        <FaDirections size={24} />
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <h2 className="section-title">Shelters</h2>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Shelter Name</th>
                            <th>Capacity Remaining</th>
                            <th>Directions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shelters.map((shelter, index) => (
                            <tr key={index}>
                                <td>{shelter.name}</td>
                                <td>{shelter.capacity}</td>
                                <td>
                                    <a
                                        href={shelter.location}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-direction"
                                    >
                                        <FaDirections size={24} />
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CitySearch;
