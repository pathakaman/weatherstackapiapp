import React from 'react';
import { useHistory,useLocation } from 'react-router-dom';

export default function HistoricalData() {
    const history = useHistory();
    const location=useLocation();
    return (
        <>
            <h1 className='text-center'>Historical Weather Report</h1>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-5 col-sm-12 col-xs-12">
                        <div className="card text-white">
                            <div className="div1 p-4 p-md-5 ">
                                <h5>{location.countryName}</h5>
                                <h1>{location.hTemp}<sup>&deg;C </sup> </h1>
                            </div>
                            <div className="div2">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                <div className='text-center'>
                    <button
                        type="submit"
                        onClick={() => { history.goBack(); }}
                        className="btn btn-warning">
                        Go Back
                    </button>
                </div>
            }
        </>
    )
}