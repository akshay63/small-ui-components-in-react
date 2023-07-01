import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Window
      </Button>

      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        varius nulla metus, finibus aliquam tellus fringilla quis. Pellentesque
        sagittis ligula ac risus convallis posuere. Vivamus diam arcu, consequat
        a scelerisque ac, pretium in nisl. Etiam ut tellus nec nisl ultrices
        placerat. Pellentesque convallis dui at sagittis pellentesque. Nunc
        commodo, mauris ut efficitur varius, sapien mi semper ipsum, ut suscipit
        velit urna a enim. Praesent tincidunt felis ac semper cursus. Sed dui
        nunc, sagittis at dui ut, placerat porta felis. Mauris eros justo,
        accumsan sit amet ante nec, aliquet aliquam felis. Nullam eget dui vitae
        urna aliquet accumsan et vitae ante. Donec sit amet orci ut elit
        consequat posuere ut in dolor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        varius nulla metus, finibus aliquam tellus fringilla quis. Pellentesque
        sagittis ligula ac risus convallis posuere. Vivamus diam arcu, consequat
        a scelerisque ac, pretium in nisl. Etiam ut tellus nec nisl ultrices
        placerat. Pellentesque convallis dui at sagittis pellentesque. Nunc
        commodo, mauris ut efficitur varius, sapien mi semper ipsum, ut suscipit
        velit urna a enim. Praesent tincidunt felis ac semper cursus. Sed dui
        nunc, sagittis at dui ut, placerat porta felis. Mauris eros justo,
        accumsan sit amet ante nec, aliquet aliquam felis. Nullam eget dui vitae
        urna aliquet accumsan et vitae ante. Donec sit amet orci ut elit
        consequat posuere ut in dolor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        varius nulla metus, finibus aliquam tellus fringilla quis. Pellentesque
        sagittis ligula ac risus convallis posuere. Vivamus diam arcu, consequat
        a scelerisque ac, pretium in nisl. Etiam ut tellus nec nisl ultrices
        placerat. Pellentesque convallis dui at sagittis pellentesque. Nunc
        commodo, mauris ut efficitur varius, sapien mi semper ipsum, ut suscipit
        velit urna a enim. Praesent tincidunt felis ac semper cursus. Sed dui
        nunc, sagittis at dui ut, placerat porta felis. Mauris eros justo,
        accumsan sit amet ante nec, aliquet aliquam felis. Nullam eget dui vitae
        urna aliquet accumsan et vitae ante. Donec sit amet orci ut elit
        consequat posuere ut in dolor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        varius nulla metus, finibus aliquam tellus fringilla quis. Pellentesque
        sagittis ligula ac risus convallis posuere. Vivamus diam arcu, consequat
        a scelerisque ac, pretium in nisl. Etiam ut tellus nec nisl ultrices
        placerat. Pellentesque convallis dui at sagittis pellentesque. Nunc
        commodo, mauris ut efficitur varius, sapien mi semper ipsum, ut suscipit
        velit urna a enim. Praesent tincidunt felis ac semper cursus. Sed dui
        nunc, sagittis at dui ut, placerat porta felis. Mauris eros justo,
        accumsan sit amet ante nec, aliquet aliquam felis. Nullam eget dui vitae
        urna aliquet accumsan et vitae ante. Donec sit amet orci ut elit
        consequat posuere ut in dolor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        varius nulla metus, finibus aliquam tellus fringilla quis. Pellentesque
        sagittis ligula ac risus convallis posuere. Vivamus diam arcu, consequat
        a scelerisque ac, pretium in nisl. Etiam ut tellus nec nisl ultrices
        placerat. Pellentesque convallis dui at sagittis pellentesque. Nunc
        commodo, mauris ut efficitur varius, sapien mi semper ipsum, ut suscipit
        velit urna a enim. Praesent tincidunt felis ac semper cursus. Sed dui
        nunc, sagittis at dui ut, placerat porta felis. Mauris eros justo,
        accumsan sit amet ante nec, aliquet aliquam felis. Nullam eget dui vitae
        urna aliquet accumsan et vitae ante. Donec sit amet orci ut elit
        consequat posuere ut in dolor.
      </p>
    </div>
  );
}

export default ModalPage;
