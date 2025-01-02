# React Native useCallback Hook Dependency Issue

This repository demonstrates a common issue with React Native's `useCallback` hook. The problem arises when a function passed to `useCallback` depends on a state variable that isn't included in the dependency array, leading to unexpected behavior and inefficient re-renders.

## Problem

The `bug.js` file showcases this issue.  The `myCallback` function uses a state variable (`count`) that's updated outside the `useCallback` dependency array. This results in the function not being recreated when the state variable changes, leading to the component not re-rendering correctly.

## Solution

The `bugSolution.js` file provides a solution. By including the `count` state variable in the `useCallback` hook's dependency array, the function is recreated whenever the `count` changes, ensuring proper re-rendering and correct behavior.