const Section7 = () => {
  return (
    <>
      <section>
        <div class="portfoliobox">
          <div class="portfolio">
            <h3>Get In Touch</h3>
            <p>
              Lorem ipsum you dfnfj jn rice the Lorem ipsum dolor sit amet.
              excepturi dolorum?
            </p>
            <div class="items2">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Full Name
                </span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2">
                  @gmail.com
                </span>
              </div>

              <div class="mb-3">
                <label for="basic-url" class="form-label">
                  Product Details
                </label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon3">
                    https://example.com/users/
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3 basic-addon4"
                  />
                </div>
              </div>

              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                />
                <br />
                <span class="input-group-text">@</span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Brand Name"
                  aria-label="Server"
                />
              </div>

              <div class="input-group">
                <span class="input-group-text">Message</span>
                <textarea
                  class="form-control"
                  aria-label="With textarea"
                ></textarea>
              </div>
            </div>

            <button class="btn btn-primary mt-4">Submit</button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Section7;
