This project aims to solve various problems related to parsing and visualizing a binary tree data structure. It provides functions implemented in TypeScript along with a Single Page Web Application using React and MobX state management library.


## Problem 1: Binary Tree Parsing

The function convertBinaryTreeToJSON can be found in the src/utils/binaryTreeParser file. You can see the testing code in App.tsx. To run it in a localhost environment, use the command yarn start. Once running, you can see the function's output on the main page by checking the console. Please refer to the screenshot below for an example.

<img width="1440" alt="screenshot 2023-05-24 오후 6 49 58" src="https://github.com/everywherejacobkim/ms-parsing-tree-react-typescript/assets/87889917/5eb4ad6a-805f-492f-97d2-c7cd711fc3f9">

## Problem 2: Binary Tree Visualization Web App

Please follow the steps below to test the application:
- Add a .txt file that contains an array for parsing. The array should follow the format: [id, leftChild, rightChild]. This file will serve as the input for the binary tree.
- Check the binary tree data structure by viewing it in the textarea.
- Below the textarea, you can find the output area where the binary tree will be displayed in a visual format.

![screenshot 2023-05-24 오후 8 36 02](https://github.com/everywherejacobkim/ms-parsing-tree-react-typescript/assets/87889917/7ee80849-9f07-48d1-8625-b59eede1c6cc)


## Problem 3: Highlighting the Smallest Subtree
Test multiple arrays for parsing and check the smallest subtree highlighted with a green color border.

![screenshot 2023-05-24 오후 8 49 16](https://github.com/everywherejacobkim/ms-parsing-tree-react-typescript/assets/87889917/1a9f773d-5d0c-49d6-81fc-15019f5baaae)


* Note: Enhance the user experience of this app by styling it with a green and yellow color theme and center alignment. 

