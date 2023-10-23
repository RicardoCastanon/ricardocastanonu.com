import React from 'react';

function AdditionalSkills() {
    return (
        <div>
            <h2 className="py-6">{"Other Skills being Developed: "}</h2>
            <ul className="list-disc px-7">
                <li>Web Development
                    <ul className="list-square pl-6">
                        <li>React</li>
                        <li>Typescript</li>
                        <li>Next.js</li>
                        <li>Tailwind CSS</li>
                    </ul>
                    <li>Machine Learning and Neural Networks</li>
                    <li>Meteorology</li>
                    <li>Battery and Motor Power Management</li>
                </li>
            </ul>
        </div>
    );
}

export default AdditionalSkills;