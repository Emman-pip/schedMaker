const block = (block) => {
  const subjects = {};
  return { block, subjects };
};

const subject = (title, day, start, isStartAM, end, isEndAM) => {
  return { title, day, start, isStartAM, end, isEndAM };
};

function conflictChecker(block1, block2, c = false, isFalse = 0) {
  const block1Subjs = block1.subjects;
  const block2Subjs = block2.subjects;
  for (let i = 0; i < Object.keys(block1Subjs).length; i++) {
    for (let v = 0; v < Object.keys(block2Subjs).length; v++) {
      const block1Subj = block1Subjs[Object.keys(block1Subjs)[i]];
      const block2Subj = block2Subjs[Object.keys(block2Subjs)[v]];
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
          isFalse++;
          console.log(
            `\nConflict of schedule: ${block1Subj.title} in block:${block1.block} and ${block2Subj.title} in block:${block2.block}\n`
          );
          if (c == true) continue;
          return;
        } else continue;
      }
    }
  }
  if (isFalse > 0) {
    return;
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

function checkMultipleSchedules(left, right, c = false) {
  for (let i = 0; i < left.length; i++) {
    for (let v = 0; v < right.length; v++) {
      conflictChecker(left[i], right[v], c);
    }
  }
}

function subjectsTime(block) {
  let START = "";
  let END = "";
  console.log(block.block);
  for (let i = 0; i < Object.keys(block.subjects).length; i++) {
    if (block.subjects[Object.keys(block.subjects)[i]].isStartAM == true) {
      START = "AM";
    } else {
      START = "PM";
    }
    if (block.subjects[Object.keys(block.subjects)[i]].isStartPM == true) {
      END = "AM";
    } else {
      END = "PM";
    }
    console.log(
      block.subjects[Object.keys(block.subjects)[i]].title,
      block.subjects[Object.keys(block.subjects)[i]].day,
      `${block.subjects[Object.keys(block.subjects)[i]].start}${START} - ${
        block.subjects[Object.keys(block.subjects)[i]].end
      }${END}`
    );
  }
}

// const IT1101 = block("IT1101");
// subjectAppend(
//   IT1101,
//   subject("IT111", "Monday", 7, true, 9, true),
//   subject("IT111#2", "Thursday", 4, false, 7, false),
//   subject("FILI101", "Monday", 11, true, 12, false),
//   subject("FILI101#2", "Thursday", 7, true, 9, true),
//   subject("GED103", "Tuesday", 1, false, 2, false),
//   subject("GED103#2", "Wednesday", 11, true, 1, false)
// );

const IT1101 = block("IT1101");
subjectAppend(
  IT1101,
  subject("IT111", "Monday", 7, true, 9, true),
  subject("IT111#2", "Thursday", 4, false, 7, false),
  subject("FILI101", "Monday", 11, true, 12, false),
  subject("FILI101#2", "Thursday", 7, true, 9, true),
  subject("GED103", "Tuesday", 1, false, 2, false),
  subject("GED103#2", "Wednesday", 11, true, 1, false)
);

const IT1102 = block("IT1102");
subjectAppend(
  IT1102,
  subject("IT111", "Monday", 9, true, 11, true),
  subject("IT111#2", "Thursday", 7, true, 10, true),
  subject("FILI101", "Tuesday", 10, true, 11, true),
  subject("FILI101#2", "Wednesday", 8, true, 10, true),
  subject("GED103", "Monday", 1, false, 3, false),
  subject("GED103#2", "Thursday", 10, true, 11, true)
);
const IT1103 = block("IT1103");
subjectAppend(
  IT1103,
  subject("IT111", "Tuesday", 1, false, 3, false),
  subject("IT111#2", "Wednesday", 9, true, 12, false),
  subject("FILI101", "Wednesday", 4, false, 5, false),
  subject("FILI101#2", "Thursday", 9, true, 11, true),
  subject("GED103", "Tuesday", 6, false, 7, false),
  subject("GED103#2", "Thursday", 7, true, 9, true)
);

const IT1104 = block("IT1104");
subjectAppend(
  IT1104,
  subject("IT111", "Thursday", 4, false, 7, false),
  subject("IT111#2", "Friday", 1, false, 3, false),
  subject("FILI101", "Tuesday", 7, true, 9, true),
  subject("FILI101#2", "Thursday", 1, false, 2, false),
  subject("GED103", "Wednesday", 8, true, 10, true),
  subject("GED103#2", "Thursday", 3, false, 4, false)
);
const IT1108 = block("IT1108");
subjectAppend(
  IT1108,
  subject("IT111", "Tuesday", 7, true, 10, true),
  subject("IT111#2", "Thursday", 10, true, 1, false),
  subject("FILI101", "Wednesday", 1, false, 2, false),
  subject("FILI101#2", "Thursday", 2, false, 4, false),
  subject("GED103", "Tuesday", 10, true, 11, true),
  subject("GED103#2", "Friday", 3, false, 5, false)
);
const IT1106 = block("IT1106");
subjectAppend(
  IT1106,
  subject("IT111", "Tuesday", 10, true, 12, false),
  subject("IT111#2", "Thursday", 1, false, 4, false),
  subject("FILI101", "Tuesday", 2, false, 4, false),
  subject("FILI101#2", "Wednesday", 2, false, 3, false),
  subject("GED103", "Monday", 1, false, 3, false),
  subject("GED103#2", "Wednesday", 4, false, 5, false)
);
const IT1105 = block("IT1105");
subjectAppend(
  IT1105,
  subject("IT111", "Monday", 7, true, 10, true),
  subject("IT111#2", "Thursday", 9, true, 11, true),
  subject("FILI101", "Monday", 1, false, 2, false),
  subject("FILI101#2", "Wednesday", 10, true, 12, false),
  subject("GED103", "Monday", 10, true, 11, true),
  subject("GED103", "Thursday", 11, true, 1, false)
);

const IT1107 = block("IT1107");
subjectAppend(
  IT1107,
  subject("IT111", "Monday", 2, false, 4, false),
  subject("IT111#2", "Wednesday", 1, false, 4, false),
  subject("FILI101", "Monday", 8, true, 10, true),
  subject("FILI101#2", "Thursday", 11, true, 12, false),
  subject("GED103", "Monday", 4, false, 7, false)
);

const IT2101 = block("IT2101");
subjectAppend(
  IT2101,
  subject("PE103", "Monday", 4, false, 6, false),
  subject("PHY101", "Tuesday", 7, true, 9, true),
  subject("PHY101#2", "Thursday", 7, true, 10, true),
  subject("LITR2", "Wednesday", 7, true, 10, true),
  subject("CPE405", "Wednesday", 10, true, 11, true)
);

const IT2102 = block("IT2102");
subjectAppend(
  IT2102,
  subject("CPE405", "Thursday", 3, false, 4, false),
  subject("CPE405#2", "Friday", 1, false, 3, false),
  subject("PE103", "Thursday", 4, false, 6, false),
  subject("PHY101", "Tuesday", 1, false, 4, false),
  subject("PHY101#2", "Thursday", 10, true, 12, false),
  subject("LITR2", "Monday", 7, true, 9, true),
  subject("LITR2#2", "Tuesday", 4, false, 5, false)
);

const IT2103 = block("IT2103");
subjectAppend(
  IT2103,
  subject("CPE405", "Friday", 10, true, 1, false),
  subject("PE103", "Monday", 9, true, 11, true),
  subject("PHY101", "Tuesday", 4, false, 7, false),
  subject("PHY101#2", "Wednesday", 12, false, 2, false),
  subject("LITR2", "Monday", 12, false, 3, false)
);

const IT2104 = block("IT2104");
subjectAppend(
  IT2104,
  subject("CPE405", "Tuesday", 7, true, 8, true),
  subject("CPE405#2", "Friday", 2, false, 4, false),
  subject("PE103", "Friday", 10, true, 12, false),
  subject("PHY101", "Wednesday", 7, true, 10, true),
  subject("PHY101#2", "Tuesday", 12, false, 3, false),
  subject("LITR2", "Monday", 3, false, 4, false),
  subject("LITR2#2", "Wednesday", 4, false, 6, false)
);

const IT2105 = block("IT2105");
subjectAppend(
  IT2105,
  subject("CPE405", "Monday", 7, true, 10, true),
  subject("PE103", "Friday", 3, false, 5, false),
  subject("PHY101", "Monday", 10, true, 12, false),
  subject("PHY101#2", "Friday", 7, true, 10, true),
  subject("LITR2", "Wednesday", 2, false, 4, false),
  subject("LITR2#2", "Tuesday", 1, false, 2, false)
);
// set third argument to true to see al conflicts
// checkMultipleSchedules(
//   [IT1101, IT1102, IT1103, IT1104, IT1105, IT1106, IT1107, IT1108],
//   [IT2101, IT2102, IT2103, IT2104, IT2105],
//   true
// );

// safe combinations:
// IT1104 and IT2103
subjectsTime(IT1104);
console.log();
subjectsTime(IT2103);
