import React from "react";
import ServiceRegionRadioBtns from "./ServiceRegionRadioBtns";
import CustomerInformation from "./CustomerInformation";
import CheckboxTestComponent from "./ExtendedOptionsTwo/CheckboxTestComponent/CheckboxTestComponent";
import ProductSow from "./ExtendedOptionsTwo/ProductSow/ProductSow";
import TeradataCustomerSOW from "./ExtendedOptionsTwo/TeradataCustomerSOW/TeradataCustomerSOW";
import CustomProfessionalServicesSow from "./ExtendedOptionsTwo/CustomProfessionalServicesSow/CustomProfessionalServicesSow";

// import ProductSow from "./SOW_Type/ProductSow";
// import TeraDataSow from "./SOW_Type/TeraDataSOW";
// import CustomSow from "./SOW_Type/CustomSOW";
// import ProdSOWExtOptions from "./ExtendedOptions/ProdSOWExtOptions";
// import TeradataExtOptions from "./ExtendedOptions/TeradataExtOptions";
// import CustomProfExtOptions from "./ExtendedOptions/CustomProfExtOptions";
// import SowType from "./SOWType";
import ProductSowRaul from "./raul/Product_Sow";

// Redux
import { connect } from "react-redux";

class PdfGenFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      // Raul
      DXI_Prod: '',
      Encryp_Key_Prod: '',
      Q_LATTUS: '',
      Q_Scalari: '',


      DXi: "",
      id: null,
      serviceRegion: ["EMEA", "APAC", "NA & LATAM"],
      areaSelectedOption: [],
      customerInformation: "",
      sowType: [
        "ProductSow",
        "Teradata Customer SOW",
        "Custom Professional Services SOW"
      ],
      sowTypeSelectedOption: [],
      prodSowTestInformation: "",
      customProfServicesInformation: "",
      checkboxes: [],
      product_families: [],
      productFamilyNew: {
        product_family: ""
      }
    };
    // this.componentList = {
    //   ProductSow: (
    //     <ProdSOWExtOptions
    //       title={"Extended Customer Info"}
    //       name={"Extended Customer Info"}
    //       type={"text"}
    //       placeholder={"Extended Text Area"}
    //       value={this.state.prodSowTestInformation}
    //       handleExtText={this.handleExtendedTextArea}
    //     />
    //   ),
    //   "Teradata Customer SOW": <TeradataExtOptions />,
    //   "Custom Professional Services SOW": (
    //     <CustomProfExtOptions
    //       title={"Custom Options Info"}
    //       name={"Custom Options Info"}
    //       type={"text"}
    //       placeholder={"Custom Options Text Area"}
    //       value={this.state.customProfServicesInformation}
    //       handleCustProf={this.handleCustomProfTextArea}
    //     />
    //   )
    // };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
    this.renderProdFamilies = this.renderProdFamilies.bind(this);
    this.getProductFamilies = this.getProductFamilies.bind(this);
    this.addProductFamily = this.addProductFamily.bind(this);
    // this.checkForDups = this.checkForDups.bind(this);
    // SOW Type Methods
    this.handleRadioBtns = this.handleRadioBtns.bind(this);
    this.handleSOWTypeCheckbox = this.handleSOWTypeCheckbox.bind(this);
    // Extended Sow Type methods
    // this.handleExtendedTextArea = this.handleExtendedTextArea.bind(this);
  }
  // === SOW Type group ===
  componentDidMount = () => {
    this.getProductFamilies();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.textArea !== this.props.textArea) {
      this.setState({ customerInformation: this.props.textArea });
    }

    // update Parent state from redux state
    const { DXI_Prod, Encryp_Key_Prod, Q_LATTUS, Q_Scalari } = this.props.product_sow.product_sow;
    if(DXI_Prod !== prevState.DXI_Prod) return this.setState({ DXI_Prod });
    if(Encryp_Key_Prod !== prevState.Encryp_Key_Prod) return this.setState({ Encryp_Key_Prod });
    if(Q_LATTUS !== prevState.Q_LATTUS) return this.setState({ Q_LATTUS });
    if(Q_Scalari !== prevState.Q_Scalari) return this.setState({ Q_Scalari });
  }

  getProductFamilies = () => {
    fetch("http://localhost:4000/product_familes")
      .then((response) => response.json())
      .then((response) => this.setState({ product_families: response.data }))
      .catch((err) => console.error(err));
  };

  // checkForDups = () => {
  //   const { productFamilyNew, product_families } = this.state;
  //   console.log(product_families.indexOf(productFamilyNew.product_family));

  //   if (product_families.indexOf(productFamilyNew.product_family) === -1) {
  //     alert("this is a duplicate entry!");
  //   }
  // };

  addProductFamily = () => {
    const { productFamilyNew /* product_families */ } = this.state;
    fetch(
      `http://localhost:4000/product_familes/add?product_family=${productFamilyNew.product_family}`
    )
      .then(this.getProductFamilies)
      // .then(this.checkForDups())
      .catch((err) => console.error(err));
  };
  // === End of SOW Type group ===

  handleFormSubmit(e) {
    e.preventDefault();

    // Raul
    const { DXI_Prod, Encryp_Key_Prod, Q_LATTUS, Q_Scalari } = this.state;
    const data = { DXI_Prod, Encryp_Key_Prod, Q_LATTUS, Q_Scalari };

    // NOTE
    // onSubmit you need to reset all states from redux
    // ex this.props.reset_prod_sow({})
    // passing a empty object

    console.log(data);


    // let optionOne, optionTwo;

    // if(!this.props.DXI) {
    //   optionOne = ''
    // } else {
    //   optionOne: this.props.list.DXI;
    // }

    // if(!this.props.KEY) {
    //   optionTwo = ''
    // } else {
    //   optionTWO: this.props.list.DXI;
    // }
    const { DXi, KEY, Lotus, sclari } = this.state;

    const list = {
      DXi,
      KEY,
      Lotus,
      sclari
    };

    const formPayload = {
      areaSelectedOption: this.state.areaSelectedOption,
      customerInformation: this.props.textArea,
      sowTypeSelectedOption: this.state.sowTypeSelectedOption,
      prodSowTestInformation: list,
      customProfServicesInformation: this.state.customProfServicesInformation
    };
    // console.log("handleFormSubmit Clicked");
    console.log(formPayload);
    // alert(formPayload);
    // this.handleClearForm(e);
  }
  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      areaSelectedOption: [],
      customerInformation: "",
      sowTypeSelectedOption: []
    });
  }

  handleSOWTypeCheckbox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.sowTypeSelectedOption.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.sowTypeSelectedOption.filter(
        (item) => item !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.sowTypeSelectedOption, newSelection];
    }
    this.setState(
      {
        sowTypeSelectedOption: newSelectionArray
      },
      () =>
        console.log("sow Type Selection: ", this.state.sowTypeSelectedOption)
    );
  }

  handleTextArea(e) {
    this.setState(
      {
        customerInformation: e.target.value
      },
      () => console.log("Customer Information:", this.state.customerInformation)
    );
  }

  handleExtendedTextArea = function(e) {
    console.log("This happens?", e.target.value);
    this.setState(
      {
        prodSowTestInformation: e.target.value
      },
      () => console.log("prodSow Info:", this.state.prodSowTestInformation)
    );
  }.bind(this);

  handleCustomProfTextArea = function(e) {
    console.log("This also happens", e.target.value);
    this.setState(
      {
        customProfServicesInformation: e.target.value
      },
      () =>
        console.log(
          "Custom Prof Serv Info:",
          this.state.customProfServicesInformation
        )
    );
  }.bind(this);

  handleRadioBtns(e) {
    this.setState(
      {
        areaSelectedOption: [e.target.value]
      },
      () => console.log("Region", this.state.areaSelectedOption)
    );
  }

  renderProdFamilies = ({ idprod_family, product_family }) => (
    <div key={idprod_family}>{product_family}</div>
  );

  render() {
    const { product_families, productFamilyNew } = this.state;

    // console.log(this.props);

    // console.log(this.state.customerInformation);
    // console.log(this.props.textArea)
    return (
      <div>
        <form className="formContainer" onSubmit={this.handleFormSubmit}>
          <ServiceRegionRadioBtns
            title={"Service Region"}
            setName={"Service Region"}
            controlFunc={this.handleRadioBtns}
            type={"radio"}
            options={this.state.serviceRegion}
            selectedOptions={this.state.areaSelectedOption}
          />
          <CustomerInformation
            title={"Customer Information"}
            rows={10}
            resize={false}
            name={"customerInformation"}
            handleChange={this.handleTextArea}
            placeholder={"Enter Customer Information Here"}
          />
          <div className="form-group">
            <label className="form-label">
              SOW type
              <h6>What type of SOW do you want to generate?</h6>
            </label>
            <div>
              <CheckboxTestComponent />
              <ProductSow />
              <ProductSowRaul />
              <TeradataCustomerSOW />
              <CustomProfessionalServicesSow />
            </div>
          </div>

          {/* <SowType
            title={"SOW Type"}
            setName={"SOW Type"}
            subtitle={"What type of SOW do you want to generate?"}
            type={"checkbox"}
            controlFunc={this.handleSOWTypeCheckbox}
            options={this.state.sowType}
            selectedOptions={this.state.sowTypeSelectedOption}
            //Props for extended components
            componentList={this.componentList}
            {...propsForProdSOWExtOptions}
            value={this.state.prodSowTestInformation}
            handleExtText={this.handleExtendedTextArea}
            Custom professional services
            value={this.state.customProfServicesInformation}
            handleCustProf={this.handleCustomProfTextArea}
          /> */}
          <div>
            <input
              type="submit"
              className="btn btn-primary float-right"
              value="Submit"
            />
            <button
              /* type="submit" */
              className="btn btn-danger float-left btnSpacing"
              onClick={this.handleClearForm}
            >
              Clear Form
            </button>
            <button className="btn btn-primary float-left">Pdf Preview</button>
          </div>
        </form>
        <br />
        <br />
        <div>{product_families.map(this.renderProdFamilies)}</div>
        <div>
          <input
            value={productFamilyNew.productFamily}
            placeholder={"Add New Product Family"}
            onChange={(e) =>
              this.setState({
                productFamilyNew: {
                  ...productFamilyNew,
                  product_family: e.target.value
                }
              })
            }
          />
          <button onClick={this.addProductFamily}>Add Product Family</button>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  textArea: state.textArea,
  list: state.list,
  configOption: state.configOption,
  product_sow: state.product_sow
});

export default connect(
  mapStateToProps,
  {}
)(PdfGenFormContainer);

// export default connect(
//   mapStateToProps,
//   { sendToRedux }
// )(PdfGenFormContainer);
