import { useDispatch, useSelector } from "react-redux";
import "./BT10.scss";
import { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert

export default function BT10() {
  const [newJob, setNewJob] = useState<string>("");
  const [editingJobId, setEditingJobId] = useState<number | null>(null);
  const listJobs: any = useSelector((state: any) => state.reducerJobs);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (newJob.trim() === "") {
      // Kiểm tra nếu ô input rỗng
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: "Không được để trống nội dung công việc!",
      });
      return;
    }

    if (editingJobId !== null) {
      const updatedJob = {
        id: editingJobId,
        nameJob: newJob,
        level: Math.floor(Math.random() * 4) + 1,
      };
      dispatch({ type: "Edit", payload: updatedJob });
      setEditingJobId(null);
    } else {
      const newJobEntry = {
        id: listJobs.length + 1,
        nameJob: newJob,
        level: Math.floor(Math.random() * 4) + 1,
      };
      dispatch({ type: "Add", payload: newJobEntry });
    }
    setNewJob("");
  };

  const handleDelete = (id: number) => {
    // Hàm xử lý khi nhấn nút Xóa
    Swal.fire({
      title: "Bạn chắc chắn muốn xóa công việc này?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Đồng ý",
      cancelButtonText: "Hủy bỏ",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: "Delete", payload: id });
        Swal.fire("Đã xóa!", "Công việc đã được xóa.", "success");
      }
    });
  };

  const handleEdit = (id: number) => {
    // Hàm xử lý khi nhấn nút Sửa
    const jobToEdit = listJobs.find((item: any) => item.id === id);
    if (jobToEdit) {
      setNewJob(jobToEdit.nameJob);
      setEditingJobId(id);
    }
  };

  return (
    <div className="body">
      <div className="container">
        <h1>Todo List</h1>
        <div className="new-task">
          <input
            type="text"
            id="taskInput"
            placeholder="Nhiệm vụ mới"
            value={newJob}
            onChange={(e) => setNewJob(e.target.value)}
          />
          <button onClick={handleAdd}>
            {editingJobId !== null ? "Cập nhật" : "Thêm"}
          </button>
        </div>
        <ul className="tasks" id="taskList">
          {listJobs.map((item: any) => (
            <li key={item.id}>
              <span>{item.nameJob}</span>
              <span>
                {item.level === 1
                  ? "Khẩn cấp"
                  : item.level === 2
                  ? "Quan trọng"
                  : item.level === 3
                  ? "Bình thường"
                  : item.level === 4
                  ? "Không quan trọng"
                  : ""}
              </span>
              <button onClick={() => handleEdit(item.id)}>Sửa</button>
              <button onClick={() => handleDelete(item.id)}>Xóa</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
