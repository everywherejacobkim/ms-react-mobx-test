import * as React from "react";
import { BinTreeNode } from "../../types/TreeNode";
import { convertBinaryTreeToJSON } from "../../utils/binaryTreeParser";
import "./TreeInput.scss";

export interface TreeInputProps {
    onChange: (newTreeNode: BinTreeNode) => void;
}

interface TreeInputState {
    file: File | null;
    treeText: string;
    result: string;
}

export class TreeInput extends React.Component<TreeInputProps, TreeInputState> {
    constructor(props: TreeInputProps) {
        super(props);
        this.state = {
            file: null,
            treeText: "",
            result: "",
        };
    }

    // Function to parse an array format into a tree structure
    parseArrayToTree(arrayFormat: any[]): BinTreeNode {
    const treeJson = convertBinaryTreeToJSON(arrayFormat);
    const treeNode = JSON.parse(treeJson) as BinTreeNode;
    return treeNode;
    }

    // Event handler for file input change
    handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    this.setState({ file });
    };

    // Function to convert the file content into a tree structure
    convert = () => {
        if (this.state.file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const fileContent = e.target?.result as string;
                this.setState({ treeText: fileContent }, () => {
                    let treeArrayFormat: any[] = JSON.parse(this.state.treeText);
                    const treeNode = this.parseArrayToTree(treeArrayFormat);
                    const result = JSON.stringify(treeNode, null, 2);
                    this.setState({ result });
                    this.props.onChange(treeNode);
                });
            };
            reader.readAsText(this.state.file);
        }
    };

    render() {
    return (
        <div className="InputGroup">
            <div className="InputContainer">
                <label htmlFor="source-input">Tree source(.txt)</label>
                <input
                    type="file"
                    id="source-input"
                    accept=".txt"
                    onChange={this.handleFileChange}
                />
                <button onClick={this.convert}>Fetch</button>
            </div>
            <textarea
                rows={15}
                value={this.state.result}
                onChange={(e) => {
                this.setState({
                    treeText: e.target.value,
                });
                }}
            ></textarea>
        </div>
    );
    }
}
