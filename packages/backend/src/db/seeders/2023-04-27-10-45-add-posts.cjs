module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Posts',
      [
        {
          direction: 'Pharmaceuticals',
          title: 'A Sure Way To Get Rid Of Your Back Ache Problem',
          description: 'If you have tried everything, but still seem to suffer from snoring, don’t give up. Before turning to surgery, consider shopping for anti-snore devices. These products do not typically require a prescription, are economically priced and may just be the answer that you are looking for. However, as is the case when shopping for anything, there are a lot of anti-snore devices out there and…',
          image: 'https://res.cloudinary.com/dd16nwakh/image/upload/v1679787134/loving-couple-walks-background-high-mountains-with-glaciers-peak_pylwdn.jpg',
          author: 'Jim Sullivan',
        },
        {
          direction: 'Pharmaceuticals',
          title: 'A Sure Way To Get Rid Of Your Back Ache Problem',
          description: 'If you have tried everything, but still seem to suffer from snoring, don’t give up. Before turning to surgery, consider shopping for anti-snore devices. These products do not typically require a prescription, are economically priced and may just be the answer that you are looking for. However, as is the case when shopping for anything, there are a lot of anti-snore devices out there and…',
          image: 'https://res.cloudinary.com/dd16nwakh/image/upload/v1679787134/half-holographic-skull-with-inscription-nft-nonfungible-token-digital-art_ajaowl.jpg',
          author: 'Jim Sullivan',
        },
        {
          direction: 'Pharmaceuticals',
          title: 'A Sure Way To Get Rid Of Your Back Ache Problem',
          description: 'If you have tried everything, but still seem to suffer from snoring, don’t give up. Before turning to surgery, consider shopping for anti-snore devices. These products do not typically require a prescription, are economically priced and may just be the answer that you are looking for. However, as is the case when shopping for anything, there are a lot of anti-snore devices out there and…',
          image: 'https://res.cloudinary.com/dd16nwakh/image/upload/v1679787133/side-view-cropped-unrecognizable-business-people-working-common-desk_xduxim.jpg',
          author: 'Jim Sullivan',
        },
        {
          direction: 'Pharmaceuticals',
          title: 'A Sure Way To Get Rid Of Your Back Ache Problem',
          description: 'If you have tried everything, but still seem to suffer from snoring, don’t give up. Before turning to surgery, consider shopping for anti-snore devices. These products do not typically require a prescription, are economically priced and may just be the answer that you are looking for. However, as is the case when shopping for anything, there are a lot of anti-snore devices out there and…',
          image: 'https://res.cloudinary.com/dd16nwakh/image/upload/v1679787133/yoga-group-classes-inside-gym_krxmox.jpg',
          author: 'Jim Sullivan',
        },
        {
          direction: 'Pharmaceuticals',
          title: 'A Sure Way To Get Rid Of Your Back Ache Problem',
          description: 'If you have tried everything, but still seem to suffer from snoring, don’t give up. Before turning to surgery, consider shopping for anti-snore devices. These products do not typically require a prescription, are economically priced and may just be the answer that you are looking for. However, as is the case when shopping for anything, there are a lot of anti-snore devices out there and…',
          image: 'https://res.cloudinary.com/dd16nwakh/image/upload/v1679787133/anti-cellulite-massage-luxury-spa_edhc9r.jpg',
          author: 'Jim Sullivan',
        },
        {
          direction: 'Pharmaceuticals',
          title: 'A Sure Way To Get Rid Of Your Back Ache Problem',
          description: 'If you have tried everything, but still seem to suffer from snoring, don’t give up. Before turning to surgery, consider shopping for anti-snore devices. These products do not typically require a prescription, are economically priced and may just be the answer that you are looking for. However, as is the case when shopping for anything, there are a lot of anti-snore devices out there and…',
          image: 'https://res.cloudinary.com/dd16nwakh/image/upload/v1679787133/close-up-man-writing-code-laptop_dbk1mc.jpg',
          author: 'Jim Sullivan',
        },
        {
          direction: 'Pharmaceuticals',
          title: 'A Sure Way To Get Rid Of Your Back Ache Problem',
          description: 'If you have tried everything, but still seem to suffer from snoring, don’t give up. Before turning to surgery, consider shopping for anti-snore devices. These products do not typically require a prescription, are economically priced and may just be the answer that you are looking for. However, as is the case when shopping for anything, there are a lot of anti-snore devices out there and…',
          image: 'https://res.cloudinary.com/dd16nwakh/image/upload/v1679787133/beautiful-girl-is-engaged-yoga-studio_1_firmij.jpg',
          author: 'Jim Sullivan',
        },
        {
          direction: 'Pharmaceuticals',
          title: 'A Sure Way To Get Rid Of Your Back Ache Problem',
          description: 'If you have tried everything, but still seem to suffer from snoring, don’t give up. Before turning to surgery, consider shopping for anti-snore devices. These products do not typically require a prescription, are economically priced and may just be the answer that you are looking for. However, as is the case when shopping for anything, there are a lot of anti-snore devices out there and…',
          image: 'https://res.cloudinary.com/dd16nwakh/image/upload/v1679787133/side-view-doctor-holding-injection_nsbt8w.jpg',
          author: 'Jim Sullivan',
        },
        {
          direction: 'Pharmaceuticals',
          title: 'A Sure Way To Get Rid Of Your Back Ache Problem',
          description: 'If you have tried everything, but still seem to suffer from snoring, don’t give up. Before turning to surgery, consider shopping for anti-snore devices. These products do not typically require a prescription, are economically priced and may just be the answer that you are looking for. However, as is the case when shopping for anything, there are a lot of anti-snore devices out there and…',
          image: 'https://res.cloudinary.com/dd16nwakh/image/upload/v1679787133/side-view-cropped-unrecognizable-business-people-working-common-desk_xduxim.jpg',
          author: 'Jim Sullivan',
        },
        {
          direction: 'Pharmaceuticals',
          title: 'A Sure Way To Get Rid Of Your Back Ache Problem',
          description: 'If you have tried everything, but still seem to suffer from snoring, don’t give up. Before turning to surgery, consider shopping for anti-snore devices. These products do not typically require a prescription, are economically priced and may just be the answer that you are looking for. However, as is the case when shopping for anything, there are a lot of anti-snore devices out there and…',
          image: 'https://res.cloudinary.com/dd16nwakh/image/upload/v1679787133/yoga-group-classes-inside-gym_krxmox.jpg',
          author: 'Jim Sullivan',
        }
      ]
    );
  },

  down: (queryInterface) => queryInterface.bulkDelete('Posts', null, {}),
};
