const block = (block) => {
  const subjects = {};
  return { block, subjects };
};

const subject = (title, day, start, isStartAM, end, isEndAM) => {
  return { title, day, start, isStartAM, end, isEndAM };
};

function conflictChecker(block1, block2) {
  const block1Subjs = block1.subjects;
  const block2Subjs = block2.subjects;
  for (let i = 0; i < Object.keys(block1Subjs).length; i++) {
    for (let v = 0; v < Object.keys(block2Subjs).length; v++) {
      const block1Subj = block1Subjs[Object.keys(block1Subjs)[i]];
      const block2Subj = block2Subjs[Object.keys(block2Subjs)[i]];
      if (block1Subj.title == block2Subj.title) {
        continue;
      }
      //   console.log(block1Subj.day == block2Subj.day);
      if (block1Subj.day == block2Subj.day) {
        if (!block1Subj.isStartAM == block2Subj.isStartAM) continue;
        if (
          block1Subj.start < block2Subj.start < block1Subj.end ||
          block2Subj.start < block1Subj.start < block2Subj.end ||
          block1Subj.start < block2Subj.end < block1Subj.end ||
          block2Subj.start < block1Subj.end < block2Subj.end ||
          block1Subj.start == block2Subj.start ||
          (block1Subj.start == block2Subj.start &&
            block1Subj.end == block2Subj.end)
        ) {
          //   console.log(
          //     `\n${block1Subj.title} ${block1Subj.day} ${block1Subj.start} ${block1Subj.end} in block:${block1.block} and ${block2Subj.title} ${block2Subj.day} ${block2Subj.start} ${block2Subj.end}in block:${block2.block}`
          //   );
          console.log(
            `Conflict of schedule: ${block1Subj.title} in block:${block1.block} and ${block2Subj.title} in block:${block2.block}`
          );
          return;
        } else continue;
      }
    }
  }
  console.log(
    `No conflict of schedule between ${block1.block} and ${block2.block}`
  );
}

function subjectAppend(block, ...subjects) {
  for (let i = 0; i < subjects.length; i++) {
    let subject = subjects[i];
    block.subjects[subject.title] = subject;
  }
  return block;
}

function checkMultipleSchedules(left, right) {
  for (let i = 0; i < left.length; i++) {
    for (let v = 0; v < right.length; v++) {
      conflictChecker(left[i], right[v]);
    }
  }
}
