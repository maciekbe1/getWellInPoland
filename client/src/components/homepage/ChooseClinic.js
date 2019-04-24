import React, {useContext} from 'react';
import GlobalState from '../context/global-context';

const ChooseClinic = () => {
    const globalState = useContext(GlobalState);
    const {language} = globalState

    return (
        <div className="choose-clinic container-fluid">
            <div className="container p-0">
                <div className="row">
                    <div className="col-lg-6 offeset-lg-3 text-center">
                        <h2>
                            {language.homepage.text_6}
                        </h2>
                        <p>
                            {language.homepage.text_7}
                        </p>
                        <a href="https://qang.bpower2.com/index.php/workflow/workflowInstance/create/wc_id/379">
                            {language.homepage.text_8}
                        </a>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseClinic;