import renderToDom from './renderToDom';

const formCreator = () => {
  const domString = `
    <form id ="formBear">
    <div><h1>BEAR TRACKER</h1></div>  
    <div class="mb-3">
        <label for="bearname" class="form-label">Name:</label>
        <input type="text" class="form-control" id="bearName" aria-describedby="bearName" required>
      <div class="mb-3">
        <label for="bearURL" class="form-label">Bear Image URL:</label>
        <input type="url" class="form-control" id="bearUrl" required>
      </div>
      <button type="submit" id="submitBtn" class="btn btn-primary">Submit</button>
    </form>
    `;
  renderToDom('#bearForm', domString);
};

export default formCreator;
