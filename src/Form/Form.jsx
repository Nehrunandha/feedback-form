import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    batch: '',
    staff: '',
    feedback: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Internship Feedback Form</h2>

      {/* 👇 Use actual FormSubmit endpoint here */}
      <form
        action="https://formsubmit.co/nehrunandha30@gmail.com"
        method="POST"
        style={styles.form}
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_subject" value="New Feedback Submission" />

        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label>Batch Number:</label>
        <select
          name="batch"
          value={formData.batch}
          onChange={handleChange}
          required
          style={styles.input}
        >
          <option value="">Select Batch</option>
          <option value="Batch 1">Batch 1</option>
          <option value="Batch 2">Batch 2</option>
          <option value="Batch 3">Batch 3</option>
          <option value="Batch 4">Batch 4</option>
        </select>

        <label>Staff Name:</label>
        <select
          name="staff"
          value={formData.staff}
          onChange={handleChange}
          required
          style={styles.input}
        >
          <option value="">Select Staff</option>
          <option value="Mr. Abishek">Mr. Abishek</option>
          <option value="Mr. Nehru Nandha">Mr. Nehru Nandha</option>
          <option value="Mr. Lokesh">Mr. Lokesh</option>
          <option value="Mr. Subhash">Mr. Subhash</option>
        </select>

        <label>Feedback:</label>
        <textarea
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          rows="4"
          required
          style={styles.textarea}
        ></textarea>

        <button type="submit" style={styles.button}>
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '20px',
    borderRadius: '10px',
    background: '#f8f9fa',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'vertical',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default FeedbackForm;
