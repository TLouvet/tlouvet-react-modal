<h1>TLouvet - Basic React Modal</h1>

<p>This package allows you to create a Modal that
will trap focus. The modal component acts as a default container that you fill with your own components.</p>

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

<table>
<thead>
<tr>
<th> Parameter </th>
<th> Description </th>
</tr>
</thead>
<tbody>
<tr> 
<td>open</td> <td>Should component be displayed ? </td>
</tr>
<tr>
<td>onClose</td> <td>Use when closing the modal. By default it will be called when you click the default quit button or outside of the modal.
For keyboard users, pressing escape or validating the default close button will trigger this function. For any non default close component, you may want to add a custom close function </td>
</tr>
<tr>
<td>withDefaultClose</td> <td>Allows you to remove the original quit button, if you would like to provide your own component.</td>
</tr>
<tr>
<td>wrapperStyle</td> <td>allows you to override the default modal style if you wish to change it, below is the default css applied</td>
</tr>
</tbody>
</table>

```css
  padding: 0 30px;
  background-color: white;
  border-radius: 8px;
  width: 65%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 0 10px #000;
```

<h2>Basic Usage</h2>

```jsx
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
```

<h2> With optional parameters and personal close </h2>

```jsx
import { useState } from "react";
import { Modal } from "tlouvet-react-modal";

export function TestModal(){
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>OpenModal</button>

      <Modal open={openModal} onClose={setOpenModal} withDefaultClose={false} wrapperStyle={{backgroundColor: `black`, color: `white`}}>
          <div>
            <p> Modal Opened </p>
            <p> Thank you for using TLouvet-react-modal </p> 
            <button onClick={() => setOpenModal(false)}>Close<button>
          </div>
      </Modal>
    </>
  )
}
```