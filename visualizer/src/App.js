import './App.css';

function App() {
  const test = [1,2]
  console.log(forwardPass(test,3,2))
  return (
    <div>Hello</div>
  );
}

// arrayLayers contains all values in each Layer
// weights contains all weights
function forwardPass(input, numOfHiddenNeurons, numOfHiddenLayer) {
  var array = input
  var count = numOfHiddenNeurons
  const arrayLayers = [input]
  const weights = []
  for (let i = 0; i <= numOfHiddenLayer; i++) {
    const currentNeuron = []
    const currentWeight = []
    // Last Layer (Output) only 1 NEURON.
    if (i === numOfHiddenLayer) {
      count = 1
    }
    for (let n = 0; n < count; n++) {
      const weightArray = createWeights(array.length)
      currentNeuron.push(dot(array,weightArray))
      currentWeight.push(weightArray)
    }
    weights.push(currentWeight)
    arrayLayers.push(currentNeuron)
    array = arrayLayers[i+1]
  }
  array[0] = sigmoid(array[0])
  return [array,arrayLayers,weights]
}


function forwardPassTrain(inputs, weights, output, desiredOutput){
    const targetValues = desiredOutput
    const observedValues = output
    const finalWeightAdjustment = (observedValues - targetValues)

    // Loop from Last Layer to Next Layer
    for (let n = 0; n < inputs.length; n++) {
      for (let i = 0; i < inputs.length; i++ ) {
        // Case 1 - Input 

      } 
  }


}


//ForwardPass with Set Weights and Input
function forwadPassTraining(inputs,numOfLayers,weights) {

  for (let i =0; i <= numOfLayers; i++) {
    console.log(i)
  }
}


//Create An array of weights with length [i]
function createWeights(numOfInputs) {
  const array = []
  for (let i = 0; i < (numOfInputs); i++) {
    array.push(Math.random())
  }
  return array
}

// Dot Product
function dot(x,y){
  const array = x.map((x,i) => x *y[i])
  return array.reduce((prevNum,currNum) => prevNum + currNum)
}

//Final Output goes into sigmoid to restrict value between 0 and 1
function sigmoid(z) {
  return 1/(1+ Math.exp(-z))
}


export default App;
