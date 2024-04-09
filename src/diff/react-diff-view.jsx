import { Diff, Hunk, parseDiff } from 'react-diff-view';
import 'react-diff-view/style/index.css';
import { diffLines, formatLines } from 'unidiff';

const EMPTY_HUNKS = [];

// const oldText = '[\n' +
//     '    {\n' +
//     '        "age": "22",\n' +
//     '        "name": "Niroj"\n' +
//     '    },\n' +
//     '    {\n' +
//     '        "age": "20",\n' +
//     '        "name": "Dey"\n' +
//     '    }\n' +
//     ']\n';
// const newText = '[\n' +
//     '    {\n' +
//     '        "age": "22",\n' +
//     '        "name": "Niroj"\n' +
//     '    },\n' +
//     '    {\n' +
//     '        "age": "20",\n' +
//     '        "name": "Dey1"\n' +
//     '    }\n' +
//     ']\n';

const oldText = `<div><br></div><p><span style="font-size:18px;color:#1A202C">Tổng quan PTI là khóa Đào tạo định hướng, cung cấp cho học viên những thông tin, kiến thức cơ bản về:</span></p><p><span style="font-size:18px;color:#1A202C">- Lịch sử hình thành &amp; phát triển PTI</span></p><p><span style="font-size:18px;color:#1A202C">- Văn hóa PTI</span></p><p><span style="font-size:18px;color:#1A202C">- Các kênh thông tin, hệ thống CNTT tại PTI...</span></p><p><span style="font-size:18px;color:#1A202C">Anh/Chị vui lòng theo dõi khóa học tại:&nbsp;</span><a target="_blank" href="https://elearning.ipam.vn/lop-hoc/chi-tiet/9b78f2ce-394d-4bd1-9f7b-68c813d59b57"><span style="color: rgb(0, 85, 255)">Tổng quan PTI</span></a></p>`;

const newText = `<div><br></div><p><span style="font-size:18px;color:#1A202C">Tổng quan PTI là khóa Đào tạo định hướng, cung cấp cho học viên những thông tin, kiến thức cơ bản về:</span></p><p><span style="font-size:18px;color:#1A202C">- Lịch sử hình thành &amp; phát triển PTI</span></p><p><span style="font-size:18px;color:#1A202C">- Văn hóa PTI 1999</span></p><p><span style="font-size:18px;color:#1A202C">- Các kênh thông tin, hệ thống CNTT tại PTI...</span></p><p><span style="font-size:18px;color:#1A202C">Anh/Chị vui lòng theo dõi khóa học tại:&nbsp;</span><a target="_blank" href="https://elearning.ipam.vn/lop-hoc/chi-tiet/9b78f2ce-394d-4bd1-9f7b-68c813d59b57"><span style="color: rgb(0, 85, 255)">Tổng quan PTI</span></a></p>`;

export default function ReactDiffView() {
  const diffText = formatLines(diffLines(oldText, newText), { context: 3 });
  const [diff] = parseDiff(diffText, { nearbySequences: 'zip' });

  return (
    <div>
      <main>
        <Diff viewType="split" diffType="" hunks={diff.hunks || EMPTY_HUNKS}>
          {(hunks) => hunks.map((hunk) => <Hunk key={hunk.content} hunk={hunk} />)}
        </Diff>
      </main>
    </div>
  );
}
