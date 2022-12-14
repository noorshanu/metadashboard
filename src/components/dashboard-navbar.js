import { useRef, useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { AppBar,  Box, IconButton, Toolbar, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
import { FaTwitter, FaTelegram, FaLinkedin,FaGithub } from "react-icons/fa";
import { AccountPopover } from "./account-popover";
import {
  ConnectButton,

} from "@rainbow-me/rainbowkit";

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;
  const settingsRef = useRef(null);
  const [openAccountPopover, setOpenAccountPopover] = useState(false);

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280,
          },
          width: {
            lg: "calc(100% - 280px)",
          },
        }}
        {...other}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          {/* <Tooltip title="Search">
            <IconButton sx={{ ml: 1 }}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Tooltip> */}
          <IconButton fontSize="small">
            <FaTwitter />
          </IconButton>
          <IconButton fontSize="small">
            <FaTelegram />
          </IconButton>
          <IconButton fontSize="small">
            <FaLinkedin />
          </IconButton>
          <IconButton fontSize="small">
            <FaGithub />
          </IconButton>



          <Box sx={{ flexGrow: 1 }} />
          <div > <ConnectButton className='connect-btn' label="Connet Wallet" /></div>
          
        </Toolbar>
      </DashboardNavbarRoot>
      <AccountPopover
        anchorEl={settingsRef.current}
        open={openAccountPopover}
        onClose={() => setOpenAccountPopover(false)}
      />
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};
