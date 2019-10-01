import avatar from "./avatar.jpg";
import style from "./index.scss";//这个模块的样式和其他模块不冲突
import createAvatar from "./createAvatar";

createAvatar();

var img = new Image();
img.src = avatar;
img.classList.add(style.avatar);

var root = document.getElementById("root");
root.append(img);
