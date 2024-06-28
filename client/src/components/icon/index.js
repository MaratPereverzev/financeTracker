import { Box } from "../box";
import { memo } from "react";

const iconList = {
  menu: "menu",
  default: "do_not_disturb_on",
  profile: "person",
  search: "search",
  dictionary: "book",
  open: "chevron_right",
  word: "translate",
  saved: "bookmark",
  home: "home",
  filter: "filter_alt",
};

const areEqual = (prev, next) => {
  return JSON.stringify(prev.sx) === JSON.stringify(next.sx);
};

const Default = memo((props) => {
  const { icon, sx, ...other } = props;

  return (
    <Box flex ai sx={{ ...sx }}>
      <span className="material-symbols-rounded" {...other}>
        {iconList[icon ?? "default"]}
      </span>
    </Box>
  );
}, areEqual);

export { Default as Icon };
