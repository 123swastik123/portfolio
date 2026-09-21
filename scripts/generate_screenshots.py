# -*- coding: utf-8 -*-
import os
import io
import base64
from PIL import Image, ImageDraw, ImageFont

def get_font(name="segoeui.ttf", size=14, bold=False):
    font_name = "segoeuib.ttf" if bold else name
    font_path = os.path.join("C:/Windows/Fonts", font_name)
    if not os.path.exists(font_path):
        font_path = os.path.join("C:/Windows/Fonts", "arialbd.ttf" if bold else "arial.ttf")
    try:
        return ImageFont.truetype(font_path, size)
    except Exception:
        return ImageFont.load_default()

def draw_rounded_rect(draw, bbox, radius, fill=None, outline=None, width=1):
    draw.rounded_rectangle(bbox, radius=radius, fill=fill, outline=outline, width=width)

# =============================================================================
# 1. GENERATE AUTOCLIP SCREENSHOT (1280 x 800)
# =============================================================================
def generate_autoclip_screenshot():
    W, H = 1280, 800
    img = Image.new("RGB", (W, H), (11, 15, 23))  # #0B0F17
    draw = ImageDraw.Draw(img)

    f_h1 = get_font(size=20, bold=True)
    f_h2 = get_font(size=15, bold=True)
    f_h3 = get_font(size=13, bold=True)
    f_body = get_font(size=12)
    f_body_b = get_font(size=12, bold=True)
    f_small = get_font(size=11)
    f_code = get_font(name="consola.ttf", size=11)
    f_badge = get_font(size=10, bold=True)

    # Header Bar
    draw_rounded_rect(draw, (0, 0, W, 58), 0, fill=(15, 23, 36), outline=(30, 41, 59), width=1)
    
    # Brand logo & title
    draw_rounded_rect(draw, (24, 12, 58, 46), 6, fill=(234, 88, 12))  # Orange brand box
    draw.polygon([(36, 20), (36, 38), (50, 29)], fill=(255, 255, 255))
    draw.text((68, 16), "AutoClip Studio", font=f_h1, fill=(248, 250, 252))
    draw.text((220, 20), "v2.4 — Automated AI Short-Form Video Generator", font=f_body, fill=(148, 163, 184))

    # Header Status Pills
    draw_rounded_rect(draw, (620, 16, 780, 42), 13, fill=(17, 34, 25), outline=(34, 197, 94), width=1)
    draw.ellipse((632, 26, 640, 34), fill=(34, 197, 94))
    draw.text((648, 21), "AI Director Active", font=f_badge, fill=(187, 247, 208))

    draw_rounded_rect(draw, (792, 16, 960, 42), 13, fill=(15, 23, 42), outline=(56, 189, 248), width=1)
    draw.text((804, 21), "1080x1920 (9:16) • 60 FPS", font=f_badge, fill=(186, 230, 253))

    draw_rounded_rect(draw, (972, 16, 1100, 42), 13, fill=(24, 24, 37), outline=(168, 85, 247), width=1)
    draw.text((984, 21), "Dual-Gate QA: PASS", font=f_badge, fill=(233, 213, 255))

    draw_rounded_rect(draw, (1112, 14, 1256, 44), 6, fill=(234, 88, 12))
    draw.text((1126, 21), "⚡ Export Reel (9:16)", font=f_body_b, fill=(255, 255, 255))

    # LEFT COLUMN (Work Area & Multi-Track Timeline)
    col_left_w = 836

    # 1. Ingest & Highlights Panel
    draw_rounded_rect(draw, (24, 70, 24 + col_left_w, 310), 8, fill=(15, 23, 42), outline=(30, 41, 59), width=1)
    draw.text((38, 82), "SOURCE INGEST & SCENE HIGHLIGHT DETECTOR", font=f_h3, fill=(203, 213, 225))
    draw.text((380, 82), "OpenCV Active Speaker Tracker + Faster-Whisper", font=f_small, fill=(100, 116, 139))

    # Load and draw source 16:9 frame
    source_img_path = "C:/Users/swastik/Desktop/Auto code/autoclip/scratch/source_frame_5s.jpg"
    if os.path.exists(source_img_path):
        s_img = Image.open(source_img_path)
        s_img_thumb = s_img.resize((340, 185), Image.Resampling.LANCZOS)
        img.paste(s_img_thumb, (38, 108))
        draw_rounded_rect(draw, (38, 108, 378, 293), 4, outline=(71, 85, 105), width=1)
        
        # Draw dynamic 9:16 crop window overlay over the speaker
        crop_x1 = 38 + int(340 * 0.35)
        crop_w = int(185 * (9/16))
        crop_x2 = crop_x1 + crop_w
        draw_rounded_rect(draw, (crop_x1, 108, crop_x2, 293), 2, outline=(234, 88, 12), width=2)
        draw_rounded_rect(draw, (crop_x1 + 4, 114, crop_x1 + 96, 132), 4, fill=(234, 88, 12))
        draw.text((crop_x1 + 8, 116), "9:16 Face Lock", font=f_badge, fill=(255, 255, 255))

    # Ingest info & segments
    draw.text((395, 108), "AI-Detected Viral Hooks (16:9 -> 9:16):", font=f_body_b, fill=(241, 245, 249))

    # Highlight cards
    highlights = [
        ("Segment 01 (00:00 - 00:18.5)", "AI Agent Breakthrough & Autonomy", "9.6 / 10", True),
        ("Segment 02 (04:12 - 04:31.0)", "Multimodal Computer Vision Reasoner", "8.9 / 10", False),
        ("Segment 03 (12:45 - 13:02.8)", "Future of Autonomous Code Engines", "8.7 / 10", False)
    ]
    y_card = 132
    for seg, title, score, active in highlights:
        fill_bg = (30, 41, 59) if active else (19, 28, 44)
        out_bg = (234, 88, 12) if active else (30, 41, 59)
        draw_rounded_rect(draw, (395, y_card, 846, y_card + 46), 6, fill=fill_bg, outline=out_bg, width=1)
        draw.text((407, y_card + 6), seg, font=f_small, fill=(251, 146, 60) if active else (148, 163, 184))
        draw.text((407, y_card + 23), title, font=f_body_b if active else f_body, fill=(255, 255, 255))
        
        draw_rounded_rect(draw, (772, y_card + 10, 836, y_card + 36), 4, fill=(15, 23, 42), outline=(51, 65, 85), width=1)
        draw.text((778, y_card + 14), f"★ {score}", font=f_badge, fill=(250, 204, 21))
        y_card += 52

    # 2. Multi-Track Timeline Editor Panel
    draw_rounded_rect(draw, (24, 322, 24 + col_left_w, 716), 8, fill=(15, 23, 42), outline=(30, 41, 59), width=1)
    draw.text((38, 334), "MULTI-TRACK COMPILATION TIMELINE", font=f_h3, fill=(203, 213, 225))
    draw.text((340, 336), "Playhead: 00:04.82 / 00:18.50 (Frame 289)", font=f_code, fill=(251, 146, 60))

    # Time ruler
    draw.line((38, 360, 846, 360), fill=(51, 65, 85), width=1)
    for i in range(11):
        x_tick = 160 + i * 65
        draw.line((x_tick, 355, x_tick, 360), fill=(100, 116, 139), width=1)
        draw.text((x_tick - 14, 364), f"00:0{i*2}.0", font=f_code, fill=(100, 116, 139))

    # Timeline Tracks
    tracks = [
        ("📹 Video 9:16", "Speaker Pan + Auto Zoom Crop (1080x1920)", (59, 130, 246)),
        ("👤 Face Track", "Kalman-Filtered Smooth Centering Curve", (16, 185, 129)),
        ("💬 Karaoke", "Faster-Whisper Word-by-Word Timestamps", (245, 158, 11)),
        ("🎵 Sidechain BGM", "Dialogue Ducked Audio Bed (-14 dB LUFS)", (168, 85, 247))
    ]
    y_track = 388
    for name, desc, color in tracks:
        draw_rounded_rect(draw, (38, y_track, 175, y_track + 64), 4, fill=(24, 34, 53), outline=(51, 65, 85), width=1)
        draw.text((46, y_track + 10), name, font=f_body_b, fill=(255, 255, 255))
        draw.text((46, y_track + 34), desc[:20] + "...", font=f_small, fill=(148, 163, 184))

        draw_rounded_rect(draw, (182, y_track, 846, y_track + 64), 4, fill=(11, 18, 30), outline=(30, 41, 59), width=1)

        if "Video" in name:
            draw_rounded_rect(draw, (190, y_track + 8, 480, y_track + 56), 4, fill=(30, 58, 138), outline=color, width=1)
            draw.text((200, y_track + 20), "Clip 01: Speaker Close-Up [9:16]", font=f_small, fill=(219, 234, 254))
            draw_rounded_rect(draw, (485, y_track + 8, 830, y_track + 56), 4, fill=(30, 58, 138), outline=color, width=1)
            draw.text((495, y_track + 20), "Clip 02: Dynamic Zoom Punch-In (High Energy)", font=f_small, fill=(219, 234, 254))
        elif "Face" in name:
            draw.line([(190, y_track + 36), (280, y_track + 28), (400, y_track + 38), (550, y_track + 24), (720, y_track + 34), (840, y_track + 30)], fill=color, width=2)
            draw.text((200, y_track + 12), "60fps Kalman Camera Pan Smoother • Zero Jitter", font=f_small, fill=(167, 243, 208))
        elif "Karaoke" in name:
            words = [("A", 35), ("NEW", 45), ("SPECIES", 70), ("THAT", 55), ("EMERGES", 75), ("FROM", 50), ("DATA", 50)]
            x_w = 190
            for w_idx, (w_txt, w_len) in enumerate(words):
                is_active_w = (w_txt == "THAT")
                w_fill = (234, 88, 12) if is_active_w else (41, 37, 36)
                draw_rounded_rect(draw, (x_w, y_track + 12, x_w + w_len, y_track + 52), 4, fill=w_fill, outline=(245, 158, 11), width=1)
                draw.text((x_w + 6, y_track + 22), w_txt, font=f_badge, fill=(255, 255, 255) if is_active_w else (253, 230, 138))
                x_w += w_len + 8
        elif "Sidechain" in name:
            draw.text((200, y_track + 10), "Synthwave Bed • Dialogue Ducking Filter (-14 LUFS Target)", font=f_small, fill=(233, 213, 255))
            for k in range(190, 840, 6):
                h_bar = 8 if (320 < k < 580) else 18
                draw.line((k, y_track + 46 - h_bar, k, y_track + 46 + h_bar), fill=color, width=2)

        y_track += 72

    # Playhead line
    playhead_x = 398
    draw.line((playhead_x, 350, playhead_x, 678), fill=(239, 68, 68), width=2)
    draw.polygon([(playhead_x - 6, 350), (playhead_x + 6, 350), (playhead_x, 358)], fill=(239, 68, 68))

    # Tech Badges Footer
    draw_rounded_rect(draw, (24, 730, 24 + col_left_w, 786), 8, fill=(15, 23, 42), outline=(30, 41, 59), width=1)
    badges = [
        "Python 3.11", "OpenCV 4.10", "Faster-Whisper (CUDA)", "FFmpeg 8.1 (libass)",
        "Automated Dialogue Ducking", "Dynamic 9:16 Reframe", "37 Pytest Tests"
    ]
    bx = 38
    for b in badges:
        bw = int(draw.textlength(b, font=f_badge)) + 18
        draw_rounded_rect(draw, (bx, 744, bx + bw, 772), 4, fill=(30, 41, 59), outline=(71, 85, 105), width=1)
        draw.text((bx + 9, 751), b, font=f_badge, fill=(226, 232, 240))
        bx += bw + 10

    # RIGHT COLUMN: Mobile Phone Preview with Real Exported Frame
    col_right_x = 880
    col_right_w = 376

    draw_rounded_rect(draw, (col_right_x, 70, col_right_x + col_right_w, 786), 12, fill=(15, 23, 42), outline=(30, 41, 59), width=1)
    draw.text((col_right_x + 18, 84), "9:16 SHORT PREVIEW", font=f_h3, fill=(203, 213, 225))
    draw.text((col_right_x + 220, 86), "AutoClip v2.4 Render", font=f_small, fill=(251, 146, 60))

    phone_x = col_right_x + 28
    phone_y = 114
    phone_w = 320
    phone_h = 568
    draw_rounded_rect(draw, (phone_x - 6, phone_y - 6, phone_x + phone_w + 6, phone_y + phone_h + 6), 24, fill=(10, 15, 26), outline=(71, 85, 105), width=2)

    exported_img_path = "C:/Users/swastik/Desktop/Auto code/autoclip/scratch/exported_frame.jpg"
    if os.path.exists(exported_img_path):
        exp_img = Image.open(exported_img_path)
        exp_thumb = exp_img.resize((phone_w, phone_h), Image.Resampling.LANCZOS)
        img.paste(exp_thumb, (phone_x, phone_y))

    draw_rounded_rect(draw, (phone_x + 12, phone_y + 12, phone_x + 110, phone_y + 34), 11, fill=(0, 0, 0), outline=(234, 88, 12), width=1)
    draw.text((phone_x + 20, phone_y + 16), "⚡ AutoClip 9:16", font=f_badge, fill=(255, 255, 255))

    draw_rounded_rect(draw, (phone_x + phone_w - 90, phone_y + 12, phone_x + phone_w - 12, phone_y + 34), 11, fill=(0, 0, 0))
    draw.text((phone_x + phone_w - 78, phone_y + 16), "00:04.82", font=f_code, fill=(255, 255, 255))

    sy = phone_y + 260
    for s_icon, s_txt in [("♥", "48.2k"), ("💬", "1.8k"), ("↗", "Share"), ("♫", "Lo-Fi")]:
        draw.ellipse((phone_x + phone_w - 44, sy, phone_x + phone_w - 8, sy + 36), fill=(0, 0, 0))
        draw.text((phone_x + phone_w - 34, sy + 8), s_icon, font=f_small, fill=(255, 255, 255))
        draw.text((phone_x + phone_w - 40, sy + 38), s_txt, font=f_badge, fill=(255, 255, 255))
        sy += 62

    draw.line((phone_x, phone_y + phone_h - 4, phone_x + phone_w, phone_y + phone_h - 4), fill=(71, 85, 105), width=3)
    draw.line((phone_x, phone_y + phone_h - 4, phone_x + 88, phone_y + phone_h - 4), fill=(234, 88, 12), width=3)

    draw_rounded_rect(draw, (phone_x, phone_y + phone_h + 16, phone_x + phone_w, phone_y + phone_h + 52), 6, fill=(17, 34, 25), outline=(34, 197, 94), width=1)
    draw.text((phone_x + 18, phone_y + phone_h + 26), "✓ Two-Gate QA: Technical & Creative PASS", font=f_badge, fill=(187, 247, 208))

    out_path = "public/projects/autoclip.png"
    img.save(out_path, format="PNG")
    print("Saved autoclip screenshot to", out_path)
    return img

# =============================================================================
# 2. GENERATE OMNICOMM SCREENSHOT (1280 x 800)
# =============================================================================
def generate_omnicomm_screenshot():
    W, H = 1280, 800
    img = Image.new("RGB", (W, H), (7, 11, 19))  # #070B13
    draw = ImageDraw.Draw(img)

    f_h1 = get_font(size=20, bold=True)
    f_h2 = get_font(size=15, bold=True)
    f_h3 = get_font(size=13, bold=True)
    f_body = get_font(size=12)
    f_body_b = get_font(size=12, bold=True)
    f_small = get_font(size=11)
    f_code = get_font(name="consola.ttf", size=11)
    f_badge = get_font(size=10, bold=True)

    # Header Bar
    draw_rounded_rect(draw, (0, 0, W, 58), 0, fill=(11, 17, 27), outline=(24, 35, 51), width=1)

    # Brand Logo & Title
    draw_rounded_rect(draw, (24, 12, 58, 46), 6, fill=(15, 24, 37), outline=(0, 217, 217), width=1)
    draw.text((32, 17), "✦", font=f_h2, fill=(0, 217, 217))
    draw.text((68, 16), "OmniComm", font=f_h1, fill=(241, 245, 249))
    draw.text((188, 20), "— Indian Sign Language (ISL) Real-Time Voice Bridge", font=f_body, fill=(148, 163, 184))

    # Header Badges
    draw_rounded_rect(draw, (640, 16, 840, 42), 13, fill=(15, 24, 37), outline=(0, 217, 217), width=1)
    draw.ellipse((652, 26, 660, 34), fill=(0, 217, 217))
    draw.text((668, 21), "ISL CNN Model: 26 Classes", font=f_badge, fill=(204, 251, 241))

    draw_rounded_rect(draw, (852, 16, 990, 42), 13, fill=(15, 24, 37), outline=(37, 99, 235), width=1)
    draw.text((864, 21), "WebRTC: 18ms • 30 FPS", font=f_badge, fill=(191, 219, 254))

    draw_rounded_rect(draw, (1002, 16, 1256, 42), 13, fill=(30, 27, 75), outline=(129, 140, 248), width=1)
    draw.text((1014, 21), "★ CodeFury 9.0 Finalist • Byte Hogs", font=f_badge, fill=(224, 231, 255))

    # COLUMN 1: Live Webcam & Gesture Recognition Zone
    col1_w = 466
    draw_rounded_rect(draw, (24, 70, 24 + col1_w, 716), 8, fill=(11, 17, 27), outline=(24, 35, 51), width=1)
    draw.text((38, 82), "LIVE CAMERA & GESTURE RECOGNITION ZONE", font=f_h3, fill=(241, 245, 249))
    draw.text((38, 102), "Webcam 1080p -> HSV Skin Mask -> 64x64 CNN -> Word Synthesizer", font=f_small, fill=(100, 116, 139))

    cam_x = 38
    cam_y = 126
    cam_w = col1_w - 28
    cam_h = 320
    draw_rounded_rect(draw, (cam_x, cam_y, cam_x + cam_w, cam_y + cam_h), 6, fill=(5, 8, 14), outline=(30, 41, 59), width=1)

    draw.ellipse((cam_x + 140, cam_y + 40, cam_x + 220, cam_y + 130), fill=(26, 36, 52))
    draw.ellipse((cam_x + 100, cam_y + 120, cam_x + 260, cam_y + 260), fill=(20, 29, 44))

    hand_bx = cam_x + 210
    hand_by = cam_y + 90
    hand_bw = 140
    hand_bh = 150
    draw_rounded_rect(draw, (hand_bx, hand_by, hand_bx + hand_bw, hand_by + hand_bh), 4, outline=(0, 217, 217), width=2)
    draw_rounded_rect(draw, (hand_bx + 4, hand_by + 4, hand_bx + 118, hand_by + 24), 4, fill=(0, 217, 217))
    draw.text((hand_bx + 8, hand_by + 6), "ISL Landmark Box", font=f_badge, fill=(7, 11, 19))

    joints = [
        (hand_bx + 70, hand_by + 130),
        (hand_bx + 50, hand_by + 115),
        (hand_bx + 35, hand_by + 95),
        (hand_bx + 28, hand_by + 75),
        (hand_bx + 25, hand_by + 55),
        (hand_bx + 55, hand_by + 75),
        (hand_bx + 53, hand_by + 50),
        (hand_bx + 52, hand_by + 32),
        (hand_bx + 50, hand_by + 18),
        (hand_bx + 70, hand_by + 75),
        (hand_bx + 70, hand_by + 48),
        (hand_bx + 70, hand_by + 28),
        (hand_bx + 70, hand_by + 14),
        (hand_bx + 85, hand_by + 80),
        (hand_bx + 87, hand_by + 55),
        (hand_bx + 88, hand_by + 38),
        (hand_bx + 89, hand_by + 24),
        (hand_bx + 100, hand_by + 90),
        (hand_bx + 105, hand_by + 70),
        (hand_bx + 108, hand_by + 55),
        (hand_bx + 110, hand_by + 42),
    ]
    connections = [
        (0,1),(1,2),(2,3),(3,4),
        (0,5),(5,6),(6,7),(7,8),
        (5,9),(9,10),(10,11),(11,12),
        (9,13),(13,14),(14,15),(15,16),
        (13,17),(17,18),(18,19),(19,20),(0,17)
    ]
    for j1, j2 in connections:
        draw.line([joints[j1], joints[j2]], fill=(0, 217, 217), width=2)
    for jx, jy in joints:
        draw.ellipse((jx - 3, jy - 3, jx + 3, jy + 3), fill=(255, 255, 255), outline=(37, 99, 235), width=1)

    draw_rounded_rect(draw, (cam_x + 12, cam_y + 12, cam_x + 120, cam_y + 36), 4, fill=(0, 0, 0))
    draw.text((cam_x + 18, cam_y + 16), "● REC [Webcam]", font=f_badge, fill=(239, 68, 68))

    draw_rounded_rect(draw, (cam_x + 12, cam_y + cam_h - 40, cam_x + 160, cam_y + cam_h - 12), 4, fill=(0, 0, 0))
    draw.text((cam_x + 18, cam_y + cam_h - 34), "FPS: 30.2 • Res: 1080p", font=f_code, fill=(203, 213, 225))

    res_y = 458
    draw_rounded_rect(draw, (cam_x, res_y, cam_x + cam_w, res_y + 86), 6, fill=(15, 24, 37), outline=(0, 217, 217), width=1)
    draw.text((cam_x + 14, res_y + 12), "CURRENT DETECTED SIGN", font=f_badge, fill=(148, 163, 184))
    draw.text((cam_x + 14, res_y + 32), "✦ Namaste / Greetings", font=f_h2, fill=(255, 255, 255))
    draw.text((cam_x + 14, res_y + 60), "Confidence: 97.8% • Stable Frame Count: 8/6", font=f_small, fill=(0, 217, 217))

    draw_rounded_rect(draw, (cam_x + cam_w - 90, res_y + 20, cam_x + cam_w - 14, res_y + 66), 4, fill=(7, 11, 19), outline=(37, 99, 235), width=1)
    draw.text((cam_x + cam_w - 82, res_y + 26), "CLASS", font=f_badge, fill=(148, 163, 184))
    draw.text((cam_x + cam_w - 68, res_y + 40), "'N'", font=f_h2, fill=(0, 217, 217))

    v_y = 556
    draw_rounded_rect(draw, (cam_x, v_y, cam_x + cam_w, v_y + 54), 6, fill=(17, 34, 25), outline=(34, 197, 94), width=1)
    draw.text((cam_x + 14, v_y + 10), "AI AUTOMATIC VOICE SYNTHESIZER (TTS)", font=f_badge, fill=(187, 247, 208))
    draw.text((cam_x + 14, v_y + 28), "\"Hello, Namaste!\"", font=f_h3, fill=(255, 255, 255))
    draw.text((cam_x + cam_w - 110, v_y + 30), "♫ Audio Out", font=f_badge, fill=(74, 222, 128))

    m_y = 620
    draw_rounded_rect(draw, (cam_x, m_y, cam_x + cam_w, m_y + 84), 6, fill=(15, 24, 37), outline=(30, 41, 59), width=1)
    draw.text((cam_x + 14, m_y + 10), "VISION PIPELINE STAGES", font=f_badge, fill=(148, 163, 184))
    draw.text((cam_x + 14, m_y + 30), "• HSV Skin Masking: [0, 30, 20] -> [50, 255, 255]", font=f_code, fill=(203, 213, 225))
    draw.text((cam_x + 14, m_y + 48), "• Gaussian Blur + 64x64 Reshape -> Keras CNN", font=f_code, fill=(203, 213, 225))
    draw.text((cam_x + 14, m_y + 66), "• Debounce Stability Guard: 2.5s Audio Anti-Spam", font=f_code, fill=(203, 213, 225))

    # COLUMN 2: Indian Sign Language Reference Dataset
    col2_x = 504
    col2_w = 360
    draw_rounded_rect(draw, (col2_x, 70, col2_x + col2_w, 716), 8, fill=(11, 17, 27), outline=(24, 35, 51), width=1)
    draw.text((col2_x + 18, 82), "ISL GESTURE DATASET & MATRIX", font=f_h3, fill=(241, 245, 249))
    draw.text((col2_x + 18, 102), "Authentic Indian Sign Language 26-Letter Gestures", font=f_small, fill=(100, 116, 139))

    isl_img_path = "C:/Users/swastik/.gemini/antigravity/scratch/omnicomm/frontend/images/ISL_Alphabet.png"
    if os.path.exists(isl_img_path):
        isl_img = Image.open(isl_img_path)
        if isl_img.mode == "RGBA":
            bg_dark = Image.new("RGB", isl_img.size, (11, 17, 27))
            bg_dark.paste(isl_img, mask=isl_img.split()[3])
            isl_img = bg_dark
        isl_thumb = isl_img.resize((col2_w - 28, 235), Image.Resampling.LANCZOS)
        img.paste(isl_thumb, (col2_x + 14, 126))
        draw_rounded_rect(draw, (col2_x + 14, 126, col2_x + col2_w - 14, 361), 4, outline=(30, 41, 59), width=1)

    draw.text((col2_x + 18, 372), "20 Real-Time Conversational Mappings:", font=f_body_b, fill=(203, 213, 225))

    gestures_list = [
        ("Namaste / Hello", "Hello, Namaste", "Class N"),
        ("Thumbs Up", "Yes, good", "Class A"),
        ("Open Palm", "Stop / Wait", "Class B"),
        ("Wave Motion", "Bye / Hi", "Motion"),
        ("Peace / Two", "Peace / Two", "Class V"),
        ("Friend", "Friend / Team", "Class Y"),
        ("Open Hands", "Thank you", "Class M"),
        ("Raised Hand", "Help needed", "Class H"),
    ]
    gy = 398
    for g_icon, g_word, g_cls in gestures_list:
        draw_rounded_rect(draw, (col2_x + 14, gy, col2_x + col2_w - 14, gy + 32), 4, fill=(15, 24, 37), outline=(24, 35, 51), width=1)
        draw.text((col2_x + 22, gy + 8), g_icon, font=f_small, fill=(255, 255, 255))
        draw.text((col2_x + 140, gy + 8), f"➔ \"{g_word}\"", font=f_small, fill=(0, 217, 217))
        draw.text((col2_x + col2_w - 74, gy + 8), g_cls, font=f_badge, fill=(148, 163, 184))
        gy += 38

    # COLUMN 3: Two-Way Conversation Transcript
    col3_x = 878
    col3_w = 378
    draw_rounded_rect(draw, (col3_x, 70, col3_x + col3_w, 716), 8, fill=(11, 17, 27), outline=(24, 35, 51), width=1)
    draw.text((col3_x + 18, 82), "TWO-WAY CONVERSATION BRIDGE", font=f_h3, fill=(241, 245, 249))
    draw.text((col3_x + 18, 102), "Real-Time Sign-to-Voice & Speech-to-Text", font=f_small, fill=(100, 116, 139))

    draw_rounded_rect(draw, (col3_x + 14, 126, col3_x + col3_w - 14, 162), 4, fill=(15, 24, 37), outline=(37, 99, 235), width=1)
    draw.text((col3_x + 22, 136), "Room: CodeFury-Session #409", font=f_code, fill=(191, 219, 254))
    draw.text((col3_x + col3_w - 100, 136), "● 2 Connected", font=f_badge, fill=(34, 197, 94))

    messages = [
        ("Signer (ISL Camera)", "Hello, Namaste!", "00:02", True),
        ("Hearing Partner (Mic)", "Good afternoon! How can I assist you with government services today?", "00:06", False),
        ("Signer (ISL Camera)", "Yes, good. Need guidance on scheme eligibility.", "00:11", True),
        ("Hearing Partner (Mic)", "Understood! Which district in Karnataka do you reside in?", "00:16", False),
        ("Signer (ISL Camera)", "Bengaluru Urban. All documents ready.", "00:21", True),
    ]
    my = 176
    for sender, text, ts, is_signer in messages:
        bubble_bg = (16, 37, 43) if is_signer else (24, 34, 53)
        bubble_out = (0, 217, 217) if is_signer else (59, 130, 246)
        
        bubble_h = 58 if len(text) > 40 else 46
        draw_rounded_rect(draw, (col3_x + 14, my, col3_x + col3_w - 14, my + bubble_h), 6, fill=bubble_bg, outline=bubble_out, width=1)
        
        draw.text((col3_x + 22, my + 6), sender, font=f_badge, fill=(0, 217, 217) if is_signer else (147, 197, 253))
        draw.text((col3_x + col3_w - 60, my + 6), ts, font=f_code, fill=(148, 163, 184))
        
        if len(text) > 45:
            draw.text((col3_x + 22, my + 22), text[:45], font=f_body, fill=(241, 245, 249))
            draw.text((col3_x + 22, my + 38), text[45:], font=f_body, fill=(241, 245, 249))
        else:
            draw.text((col3_x + 22, my + 24), text, font=f_body, fill=(241, 245, 249))
            
        my += bubble_h + 12

    lang_y = 540
    draw_rounded_rect(draw, (col3_x + 14, lang_y, col3_x + col3_w - 14, lang_y + 60), 6, fill=(15, 24, 37), outline=(30, 41, 59), width=1)
    draw.text((col3_x + 22, lang_y + 10), "VOICE & TRANSLATION LANGUAGE", font=f_badge, fill=(148, 163, 184))
    
    langs = [("English", True), ("Kannada", False), ("Hindi", False)]
    lx = col3_x + 22
    for l_name, l_act in langs:
        lw = int(draw.textlength(l_name, font=f_badge)) + 16
        draw_rounded_rect(draw, (lx, lang_y + 28, lx + lw, lang_y + 50), 4, fill=(0, 217, 217) if l_act else (24, 35, 51), outline=(0, 217, 217) if l_act else (51, 65, 85))
        draw.text((lx + 8, lang_y + 33), l_name, font=f_badge, fill=(7, 11, 19) if l_act else (203, 213, 225))
        lx += lw + 8

    act_y = 612
    draw_rounded_rect(draw, (col3_x + 14, act_y, col3_x + col3_w - 14, act_y + 92), 6, fill=(15, 24, 37), outline=(30, 41, 59), width=1)
    draw.text((col3_x + 22, act_y + 10), "ACTIVE AUDIO ENGINES", font=f_badge, fill=(148, 163, 184))
    draw.text((col3_x + 22, act_y + 30), "• Input Mic: Web Speech Recognition API", font=f_small, fill=(203, 213, 225))
    draw.text((col3_x + 22, act_y + 50), "• Output Audio: PyTTSx3 Background Thread", font=f_small, fill=(203, 213, 225))
    draw.text((col3_x + 22, act_y + 70), "• Latency: Zero-buffer real-time streaming", font=f_small, fill=(0, 217, 217))

    # Tech Footer
    draw_rounded_rect(draw, (24, 730, W - 24, 786), 8, fill=(11, 17, 27), outline=(24, 35, 51), width=1)
    badges = [
        "Python", "OpenCV", "MediaPipe Hands", "Convolutional Neural Network (CNN)",
        "WebRTC Real-Time Stream", "FastAPI Service", "PyTTSx3 Voice Engine", "CodeFury 9.0"
    ]
    bx = 38
    for b in badges:
        bw = int(draw.textlength(b, font=f_badge)) + 18
        draw_rounded_rect(draw, (bx, 744, bx + bw, 772), 4, fill=(15, 24, 37), outline=(0, 217, 217) if "CodeFury" in b else (51, 65, 85), width=1)
        draw.text((bx + 9, 751), b, font=f_badge, fill=(0, 217, 217) if "CodeFury" in b else (203, 213, 225))
        bx += bw + 12

    out_path = "public/projects/omnicomm.png"
    img.save(out_path, format="PNG")
    print("Saved omnicomm screenshot to", out_path)
    return img

if __name__ == "__main__":
    generate_autoclip_screenshot()
    generate_omnicomm_screenshot()
