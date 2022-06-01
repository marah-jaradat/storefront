// import React from 'react';
// import { connect } from 'react-redux';
// //import { selectCategory } from '../../store/actions/categories';
// import { selectACategory } from '../../store/reduxToolkitStore/actions/categories';

// import { Button, Stack, Typography, Box }  from '@mui/material';

// const Categories = (props) => {
//   return (
//     <Box mt={3} data-testid="categories" sx={{flexGrow: 1}}>
//       <Typography variant='h4'  ml={2}>Browse Our Categories</Typography>
//       <Stack direction="row">
//         {props.categories.map((category, idx) => {
//           return <Button size="small" color="info" key={idx} onClick={() => props.selectCategory(category)} data-testid={`category-btn-${category.displayName}`}>{category.displayName}</Button>
//         })}
//       </Stack>
//     </Box>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     categories: state.categories.categories,
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   selectCategory: (category) => dispatch(selectCategory(category)),
// });

// //rtk
// // const mapDispatchToProps = {
// //   selectCategory: selectACategory,
// // };

// export default connect(mapStateToProps, mapDispatchToProps)(Categories);import React from 'react';
// import { connect } from 'react-redux';
// //import { selectCategory } from '../../store/actions/categories';
// import { selectACategory } from '../../store/reduxToolkitStore/actions/categories';

// import { Button, Stack, Typography, Box }  from '@mui/material';

// const Categories = (props) => {
//   return (
//     <Box mt={3} data-testid="categories" sx={{flexGrow: 1}}>
//       <Typography variant='h4'  ml={2}>Browse Our Categories</Typography>
//       <Stack direction="row">
//         {props.categories.map((category, idx) => {
//           return <Button size="small" color="info" key={idx} onClick={() => props.selectCategory(category)} data-testid={`category-btn-${category.displayName}`}>{category.displayName}</Button>
//         })}
//       </Stack>
//     </Box>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     categories: state.categories.categories,
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   selectCategory: (category) => dispatch(selectCategory(category)),
// });

// //rtk
// // const mapDispatchToProps = {
// //   selectCategory: selectACategory,
// // };

// export default connect(mapStateToProps, mapDispatchToProps)(Categories);
