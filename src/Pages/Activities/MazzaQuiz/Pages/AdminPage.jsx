import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const QuestionManagement = () => {
  const API_URL = "http://localhost:3000/api/majaa/questions";

  const initialFormState = {
    question_text: "",
    correct_answer: "",
    options: ["", "", "", ""],
  };

  const [questions, setQuestions] = useState([]);
  const [form, setForm] = useState(initialFormState);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fetchQuestions = async () => {
    try {
      setTableLoading(true);

      const res = await axios.get(API_URL);

      setQuestions(res.data?.data || res.data || []);
    } catch (error) {
      console.error("Fetch Questions Error:", error);
    } finally {
      setTableLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...form.options];
    updatedOptions[index] = value;

    setForm({
      ...form,
      options: updatedOptions,
    });
  };

  const resetForm = () => {
    setForm(initialFormState);
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const payload = {
        question_text: form.question_text.trim(),
        correct_answer: form.correct_answer.trim(),
        options: form.options.filter(
          (option) => option.trim() !== ""
        ),
      };

      if (
        !payload.question_text ||
        !payload.correct_answer ||
        payload.options.length < 2
      ) {
        alert(
          "Question, Correct Answer and minimum 2 options are required."
        );
        return;
      }

      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, payload);

        setMessage("Question updated successfully.");
      } else {
        await axios.post(`${API_URL}/add`, payload);

        setMessage("Question added successfully.");
      }

      resetForm();
      fetchQuestions();
    } catch (error) {
      console.error("Submit Error:", error);

      alert(
        error?.response?.data?.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (question) => {
    setEditingId(question.id);

    setForm({
      question_text: question.question_text || "",
      correct_answer: question.correct_answer || "",
      options:
        question.options?.length > 0
          ? [...question.options]
          : ["", "", "", ""],
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this question?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_URL}/delete/${id}`);

      setMessage("Question deleted successfully.");

      fetchQuestions();
    } catch (error) {
      console.error("Delete Error:", error);

      alert(
        error?.response?.data?.message ||
          "Failed to delete question."
      );
    }
  };

  return (
    <>
      {/* Banner */}
      <section className="accaodomationBannerSection carquizbanner">
        <div>
          <img
            className="eventsCalenderIamge hidden sm:block"
            src="/images/events/quiz-banner.jpeg"
            alt="Mazza Quiz"
          />

          <img
            className="block sm:hidden"
            src="/images/events/quiz-banner.jpeg"
            alt="Mazza Quiz Mobile"
          />
        </div>

        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h1>Mazza Quiz Management</h1>

            <div className="breadCrum">
              <Link to="/">Home</Link>
              {" - "}
              <span>Quiz Management</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Manage Quiz Questions
            </h2>

            <p className="mt-2 text-gray-500">
              Create, update and manage Mazza Quiz questions.
            </p>
          </div>

          {/* Success Message */}
          {message && (
            <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-700">
              {message}
            </div>
          )}

          {/* Form Card */}
          <div className="mb-10 overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
              <h3 className="text-xl font-semibold text-white">
                {editingId
                  ? "Edit Quiz Question"
                  : "Add New Quiz Question"}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="p-6">

              {/* Question */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Question
                </label>

                <textarea
                  rows={4}
                  value={form.question_text}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      question_text: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-gray-300 p-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter quiz question"
                />
              </div>

              {/* Options */}
              <div className="grid gap-5 md:grid-cols-2">
                {form.options.map((option, index) => (
                  <div key={index}>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Option {index + 1}
                    </label>

                    <input
                      type="text"
                      value={option}
                      onChange={(e) =>
                        handleOptionChange(
                          index,
                          e.target.value
                        )
                      }
                      className="w-full rounded-xl border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      placeholder={`Enter Option ${index + 1}`}
                    />
                  </div>
                ))}
              </div>

              {/* Correct Answer */}
              <div className="mt-6">
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Correct Answer
                </label>

                <input
                  type="text"
                  value={form.correct_answer}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      correct_answer: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-gray-300 p-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                  placeholder="Enter correct answer"
                />
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
                >
                  {loading
                    ? "Processing..."
                    : editingId
                    ? "Update Question"
                    : "Add Question"}
                </button>

                {editingId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Questions Table */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="border-b px-6 py-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Questions List
              </h3>
            </div>

            {tableLoading ? (
              <div className="p-10 text-center text-gray-500">
                Loading questions...
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left">
                        #
                      </th>
                      <th className="px-6 py-4 text-left">
                        Question
                      </th>
                      <th className="px-6 py-4 text-left">
                        Options
                      </th>
                      <th className="px-6 py-4 text-left">
                        Correct Answer
                      </th>
                      <th className="px-6 py-4 text-center">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {questions.length > 0 ? (
                      questions.map((question, index) => (
                        <tr
                          key={question.id}
                          className="border-t hover:bg-gray-50"
                        >
                          <td className="px-6 py-4">
                            {index + 1}
                          </td>

                          <td className="px-6 py-4">
                            {question.question_text}
                          </td>

                          <td className="px-6 py-4">
                            <div className="flex flex-wrap gap-2">
                              {question.options?.map(
                                (option, i) => (
                                  <span
                                    key={i}
                                    className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
                                  >
                                    {option}
                                  </span>
                                )
                              )}
                            </div>
                          </td>

                          <td className="px-6 py-4">
                            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                              {question.correct_answer}
                            </span>
                          </td>

                          <td className="px-6 py-4">
                            <div className="flex justify-center gap-2">
                              <button
                                onClick={() =>
                                  handleEdit(question)
                                }
                                className="rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
                              >
                                Edit
                              </button>

                              <button
                                onClick={() =>
                                  handleDelete(question.id)
                                }
                                className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="5"
                          className="py-10 text-center text-gray-500"
                        >
                          No questions found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionManagement;