import React, { Fragment } from "react";
import "../css/Sidebar.css";
import PropTypes from "prop-types";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import Typography from "@mui/material/Typography";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ListAltIcon from "@mui/icons-material/ListAlt";
import RateReviewIcon from "@mui/icons-material/RateReview";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function StyledTreeItem(props) {
  const { labelText, labelIcon: LabelIcon, ...other } = props;
  return (
    <TreeItem
      label={
        <Fragment>
          <LabelIcon color="inherit" />
          <Typography variant="body2">{labelText}</Typography>
        </Fragment>
      }
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  labelIcon: PropTypes.elementType.isRequired,
  labelText: PropTypes.string.isRequired,
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Ecommerce" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <Link>
      <SimpleTreeView
        defaultExpandedItems={["grid"]}
        slots={{
          expandIcon: ExpandMoreIcon,
          collapseIcon: ImportExportIcon,
        }}
        // defaultEndIcon={<div style={{ width: 24 }} />}
      >
        <TreeItem itemId="1" label="Products">
          <Link className="sidebar-link" to="/admin/products">
            {" "}
            <StyledTreeItem
              itemId="2"
              labelText="All"
              labelIcon={PostAddIcon}
            />{" "}
          </Link>
          <Link className="sidebar-link" to="/admin/product">
            <StyledTreeItem itemId="3" labelText="Create" labelIcon={AddIcon} />
          </Link>
        </TreeItem>
      </SimpleTreeView>
      </Link>
      <Link to="/admin/orders">
        <p>
          <ListAltIcon /> Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <RateReviewIcon /> Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
