import React, { useState, useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const myCallback = useCallback(() => {
    console.log('Count:', count);
  }, [count]); // Include count in dependencies

  return (
    <>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <View>
        <Text>Callback function was called</Text>
      </View>    </>
  );
};

export default MyComponent;