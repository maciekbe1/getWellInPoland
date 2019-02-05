import React from 'react';

const JumbotronSerarch = () => {
    return (
        <div className="jumbotron-search">
            <div className="container">
                <div className="row">
                    <form>
                        <div className="form-row">
                            <div className="col-sm-5">
                                <label htmlFor="search-by-procedure">I am looking for</label>
                                <input type="text" className="form-control" id="search-by-procedure" placeholder="Search by procedure, e.g. teeth whitening, laser eye surgery.." />
                            </div>
                            <div className="col-sm-4">
                                <label htmlFor="destinations">Near</label>
                                <input type="text" className="form-control" id="destinations" placeholder="Username" />
                            </div>
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-primary">Search clinics</button>
                            </div>

                            <div className="col-12">
                                Latest searches:
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
     );
}

export default JumbotronSerarch;