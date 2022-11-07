import ColorLensIcon from '@mui/icons-material/ColorLens';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import BarChartIcon from '@mui/icons-material/BarChart';

const features = [
    {text: 'Bootstrap UI', path: "", subMenu: ["hello"], icon: <CalendarTodayIcon color='action' />}, 
    {text: 'Forms', path: "forms", subMenu: [''], icon: <ListAltIcon color='action' />}, 
    {text: 'Tables', path: "tables", subMenu: ["hello"], icon: <CalendarMonthIcon color='action' />}, 
    {text: 'UI Colors', path: "", subMenu: [], icon: <ColorLensIcon color='action' />},
];
const examples = [
    {text: 'Pages', path: "/", subMenu: [''], icon: <ArticleIcon color='action' />}, 
    {text: 'Charts', path: "/", subMenu: [], icon: <BarChartIcon color='action' />},
];

export const data = {
    features,
    examples
}