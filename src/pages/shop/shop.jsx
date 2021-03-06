import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import SHOP_DATA from './shopdata';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections:  SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state;
    return(
      <div className='shop-page'>
        {
          collections.map((collection) => {
            return <CollectionPreview key={collection.id} {...collection} />
          })
        }
      </div>
    );
  }
};

export default ShopPage;