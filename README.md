<h1>TLouvet - Basic React Modal</h1>

<p>This package allows you to create a Modal that
will trap focus</p>

<h2> Installation and Import </h2>
<p>Add with npm : <code> npm install tlouvet-react-modal </code></p>

<p> Two possibles imports are possible: CJS and ESM </p>
<p>For ESM (typical React usage): 
  <pre><span style="color:red">import</span> { Modal } <span style="color:red"> from </span> "tlouvet-react-modal";</pre>
</p>

<p>For CJS: 
  <pre><span style="color:red">const</span> Modal = <span style="color:red">require("tlouvet-react-modal/cjs/index")</span>;</pre>
</p>

<h2>Props</h2>

<p>Here is the list of props you can currently pass to the Modal component</p>
<ul>
    <li>open: boolean</li>
    <li>children: JSX.Element</li>
    <li>wrapperStyle?: React.CSSProperties</li>
    <li>withDefaultClose?: boolean</li>
    <li>onClose: (state?: boolean) => void</li>
</ul>


<p> The "open" parameter is the state allowing to know if the component should be mounted or not</p>
<p> The "onClose" parameter is a function you should use when closing the modal. By default it will be called when you click the default quit button or outside of the modal.
For keyboard users, pressing escape or validating the default close button will trigger this function. For any non default close component, you may want to add a custom close function </p>
<p> The optional "withDefaultClose" parameter allows you to remove the original quit button, if you would like to provide your own component. </p>
<p> The optional "wrapperStyle" parameter allows you to override the default modal style if you wish to change it, below is the default css applied </p>
<pre>
  padding: 0 30px;
  background-color: white;
  border-radius: 8px;
  width: 65%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 0 10px #000;
</pre>

<h2>Basic Usage</h2>

<pre>
import { useState } from "react";
import { Modal } from "tlouvet-react-modal";

export function TestModal(){
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>OpenModal</button>

      <Modal open={openModal} onClose={setOpenModal}>
        <div>
          <p> Modal Opened </p>
          <p> Thank you for using TLouvet-react-modal </p> 
        </div>
      </Modal>
    </>
  )
}
</pre>

<h2> With optional parameters and personal close </h2>

<pre>
import { useState } from "react";
import { Modal } from "tlouvet-react-modal";

export function TestModal(){
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>OpenModal</button>

      <Modal open={openModal} onClose={setOpenModal} withDefaultClose={false} wrapperStyle={{backgroundColor: 'black', color: 'white'}}>
          <div>
            <p> Modal Opened </p>
            <p> Thank you for using TLouvet-react-modal </p> 
            <button onClick={() => setOpenModal(false)}>Close<button>
          </div>
      </Modal>
    </>
  )
}
</pre>