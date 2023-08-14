'use client'

import Post from '@components/Post.component';
import Modal from '@components/common/Modal.component';
import { POSTS } from 'dummyData/Posts.data';
import { useState } from 'react';

const HomePage = () => {
  //TODO: reply with a comment task, leave to the end 
  const [claimTokensModal, setClaimTokensModal] = useState(false);
  const claimAcceptBtnAction = () => {
    console.log('accpet comments')
  };
  return (
    <div>
      {POSTS.map((post) => (
        <Post
          key={`post-card-${post.id}`}
          post={post}
        />
      ))}

      <button onClick={() => setClaimTokensModal(true)}>opne modal</button>

      <Modal
        show={claimTokensModal}
        setShow={setClaimTokensModal}
        acceptLabel={'aceptar'}
        acceptBtnAction={claimAcceptBtnAction}
      >
        <p>
          this is comment modal
        </p>
      </Modal>
    </div>
  );
}

export default HomePage;