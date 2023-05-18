// import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.local.isLoading;
export const selectIsError = state => state.local.error;
export const selectFilter = state => state.local.filter;
export const selectModalState = state => state.local.modalShow;

// export const filterContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     const filtredContacts = contacts.filter(
//       contact =>
//         contact.name.toUpperCase().includes(filter.toUpperCase()) ||
//         contact.number.includes(filter)
//     );
//     return filtredContacts.sort((firstСontacts, secondСontacts) =>
//       firstСontacts.name.localeCompare(secondСontacts.name)
//     );
//   }
// );
