import React from 'react';

function AdditionalSkills() {
    return (
        <div className="max-w-[1240px] mx-auto px-2 py-3 pt-32" id='additionalskills'>
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
                    </li>
                        <li>Meteorology</li>
                        <li>Battery and Motor Power Management</li>
                </ul>
            </div>

            <div>
                <h2 className = "py-6">{"Skills I want to develop in the near future:"}</h2>
                <ul className = "list-disc px-7">
                    <li>Python</li>
                    <li>Data Analysis</li>
                    <li>Machine Learning and Neural Networks</li>
                    <li>Cloud Services</li>
                    <li>Further Mathematics</li>
                    <li>Further Physics</li>
                    <li>Additional Circuit Design Projects</li>
                    <li>Climate Sustainability</li>
                </ul>


            </div>
        </div>
    );
}

export default AdditionalSkills;