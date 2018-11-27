import { CREATE_INITIATIVE, CREATE_INITIATIVE_ERROR } from '../../constants';

export const createInitiative = initiative => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    firestore
      .collection('initiatives')
      .add({
        ...initiative,
        creatorFirstName: 'Sorin',
        creatorLastName: 'Doe',
        creatorId: 12345,
        createAt: new Date(),
        location_id: this.state.data.location.id
      })
      .then(() => {
        dispatch({ type: CREATE_INITIATIVE, initiative });
      })
      .catch(error => {
        dispatch({ type: CREATE_INITIATIVE_ERROR, error });
      });
  };
};
