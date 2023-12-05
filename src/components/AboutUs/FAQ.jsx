import React from 'react'

export default function FAQ({question, reponse}) {
    return (
        <>
            <div className="collapse collapse-arrow bg-base-200 mb-3">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content uppercase">
                    {question}
                </div>
                <div className="collapse-content">
                    <p>{reponse} </p>
                </div>
            </div>

        </>
    )
    }
