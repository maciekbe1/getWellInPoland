import React, { useContext } from 'react';
import Autocomplete from './Autocomplete'
import GlobalState from '../context/global-context';

const JumbotronSearch = () => {
    const globalState = useContext(GlobalState);
    const {language} = globalState

    return (
        <div className="jumbotron-search d-flex align-items-center container-fluid">

            <div className="container col-sm-5 text-center">
                <h2>{language.homepage.text_50}</h2>
                    <Autocomplete />
            </div>
        </div>
     );
};

export default JumbotronSearch;