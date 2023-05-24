import * as React from 'react';
import { observer } from "mobx-react";
import { IAppState } from "../../store/IAppState";
import { TreeInput } from '../treeInput/TreeInput';
import { TreeOutput } from '../treeOutput/TreeOutput';
import { useAppStateContext } from '../../store/AppState';
import "./Body.scss"

interface BodyProps {
    appState: IAppState
}

const BodyRenderer: React.FunctionComponent<BodyProps> = observer((props) => {
    return (
        <main className="App-body">
            <div className='Body-title'>
                {props.appState!.bodyMessage}
            </div>
            <div className='Body-main'>
                <TreeInput onChange={(newVal) => {
                    props.appState.setState({
                        ...props.appState,
                        treeNode: newVal
                    })
                }} />
                <div className="OutputGroup">
                    <div className='Output-title'>Output</div>
                    <div className="OutputContainer">
                        <TreeOutput treeNode={props.appState.treeNode} />
                    </div>
                </div>
            </div>
    
        </main>
    );
})

export const Body: React.FunctionComponent<{}> = (props) => {
    const appState = useAppStateContext();
    return <BodyRenderer appState={appState} />
}

export default Body;