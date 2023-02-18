
//Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
//Social Science Subjects - Accounting, Commerce, Marketing, Geography
//Arts Subjects - Government, Economics, Literature, History
//General Subjects - English, Mathematics

//IF...ELSE
let bolatitoSubjects = 'Arts';

if (bolatitoSubjects === 'Arts') {
    console.log('English, Mathematics, Government, Economics, Literature, History');
}
else if (bolatitoSubjects === 'Science') {
    console.log('English, Mathematics,Physics, Chemistry, Biology, Technical Drawing ');
}
else if (bolatitoSubjects === 'Social Science') {
    console.log('English, Mathematics, Accounting, Commerce, Marketing, Geography ');
}
    // Expected output: "Arts."
else {
    console.log('English, Mathematics ');
}

//SWITCH
const Subjects = 'Arts';
switch (bolatitoSubjects) {
  case 'Science':
    console.log('English, Mathematics, Physics, Chemistry, Biology, Technical Drawing');
    break;
  case 'Social Sciences':
     console.log('English, Mathematics, Accounting, Commerce, Marketing, Geography');
    break;
  case 'Arts':
    console.log('English, Mathematics, Government, Economics, Literature, History');
    // Expected output: "Arts."
    break;
  default:
    console.log(`English, Mathematics`);
}





